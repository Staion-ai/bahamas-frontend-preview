// lib/api.ts
import { Admin, AdminCreate, AdminUpdate, PaginatedResponse } from '@/types/admins/adminTypes';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log('Base API URL:', API_URL);

class ApiClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      let errorMessage = 'Error desconocido';
      try {
        const errorData = await response.json();
        errorMessage = JSON.stringify(errorData);
      } catch {}
      throw new Error(errorMessage);
    }

    // Si es 204 No Content, no parseamos JSON
    if (response.status === 204) return {} as T;

    return response.json();
  }

  // ===================== CRUD Admins =====================

  async getAdmins(page = 1, search = ''): Promise<Admin[]> {
    const params = new URLSearchParams();
    if (page > 1) params.append('page', page.toString());
    if (search) params.append('search', search);
    const query = params.toString() ? `?${params.toString()}` : '';
    return this.request<Admin[]>(`/admins/${query}`);
  }

  async getAdmin(id: number): Promise<Admin> {
    return this.request<Admin>(`/admins/${id}/`);
  }

  async createAdmin(data: AdminCreate): Promise<Admin> {
    return this.request<Admin>('/admins/', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateAdmin(id: number, data: AdminUpdate): Promise<Admin> {
    return this.request<Admin>(`/admins/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async deleteAdmin(id: number): Promise<void> {
    // Aquí usamos el mismo request para DELETE
    return this.request<void>(`/admins/${id}/`, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient();
