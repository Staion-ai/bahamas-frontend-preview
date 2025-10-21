export interface Admin {
    admin_id: number;
    admin_username: string;
    admin_email: string;
    admin_name: string;
    admin_last_name: string;
  }
  
  export interface AdminCreate {
    admin_username: string;
    admin_password: string;
    admin_password_confirm: string;
    admin_email: string;
    admin_name: string;
    admin_last_name: string;
  }
  
  export interface AdminUpdate {
    admin_username: string;
    admin_email: string;
    admin_name: string;
    admin_last_name: string;
    new_password?: string;
    confirm_password?: string;
  }
  
  export interface PaginatedResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  }