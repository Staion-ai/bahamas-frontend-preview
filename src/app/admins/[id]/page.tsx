'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/api';
import { Admin } from '@/types/admins/adminTypes';

export default function AdminDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  
  const [ admin, setAdmin ] = useState<Admin | null>(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    loadAdmin();
  }, []);

  const loadAdmin = async () => {
    try {
      const data = await apiClient.getAdmin(id);
      setAdmin( data );
    } catch ( error ) {
      console.error('Error loading admin:', error);
    } finally {
      setLoading( false );
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this administrator?')) return;

    try {
      await apiClient.deleteAdmin(id);
      router.push('/admins');
    } catch (error) {
      console.error('Error deleting admin:', error);
      alert('Error deleting administrator');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center text-red-600">Administrator not found</div>
      </div>
    );
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0C1C44] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">Administrator details</h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 py-3 border-b">
              <div className="font-semibold text-gray-700">ID:</div>
              <div className="col-span-2">{admin.admin_id}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 border-b">
              <div className="font-semibold text-gray-700">Username:</div>
              <div className="col-span-2">{admin.admin_username}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 border-b">
              <div className="font-semibold text-gray-700">Email:</div>
              <div className="col-span-2">{admin.admin_email}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 border-b">
              <div className="font-semibold text-gray-700">Name:</div>
              <div className="col-span-2">{admin.admin_name}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 border-b">
              <div className="font-semibold text-gray-700">Last name:</div>
              <div className="col-span-2">{admin.admin_last_name}</div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3">
              <div className="font-semibold text-gray-700">Full name:</div>
              <div className="col-span-2">
                {admin.admin_name} {admin.admin_last_name}
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t">
            <Link
              href="/admins"
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
             Back to list
            </Link>
            
            <div className="space-x-2">
              <Link
                href={`/admins/${admin.admin_id}/edit`}
                className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}