'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/api';
import { AdminCreate } from '@/types/admins/adminTypes';

export default function CreateAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<AdminCreate>({
    admin_username: '',
    admin_password: '',
    admin_password_confirm: '',
    admin_email: '',
    admin_name: '',
    admin_last_name: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpiar error del campo
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      await apiClient.createAdmin(formData);
      router.push('/admins');
    } catch (error: any) {
      const errorData = JSON.parse(error.message);
      setErrors(errorData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="container mx-auto px-4 py-8 max-w-2xl bg-white">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0C1C44] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">Create New Administrator</h2>
        </div>

        <div className="p-6">
          {Object.keys(errors).length > 0 && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <strong>Error:</strong>
              <ul className="list-disc list-inside mt-2">
                {Object.entries(errors).map(([field, message]) => (
                  <li key={field}>{field}: {message}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="admin_username"
                value={formData.admin_username}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0C1C44]"
                required
              />
              {errors.admin_username && (
                <p className="text-red-500 text-sm mt-1">{errors.admin_username}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="admin_password"
                value={formData.admin_password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0C1C44]"
                required
              />
              {errors.admin_password && (
                <p className="text-red-500 text-sm mt-1">{errors.admin_password}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
               Confirm Password
              </label>
              <input
                type="password"
                name="admin_password_confirm"
                value={formData.admin_password_confirm}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0C1C44]"
                required
              />
              {errors.admin_password_confirm && (
                <p className="text-red-500 text-sm mt-1">{errors.admin_password_confirm}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="admin_email"
                value={formData.admin_email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0C1C44]"
                required
              />
              {errors.admin_email && (
                <p className="text-red-500 text-sm mt-1">{errors.admin_email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="admin_name"
                value={formData.admin_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0C1C44]"
                required
              />
              {errors.admin_name && (
                <p className="text-red-500 text-sm mt-1">{errors.admin_name}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <input
                type="text"
                name="admin_last_name"
                value={formData.admin_last_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0C1C44]"
                required
              />
              {errors.admin_last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.admin_last_name}</p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <Link
                href="/admins"
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {loading ? 'Creando...' : 'Crear'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}