'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/api';
import { Admin } from '@/types/admins/adminTypes';

export default function AdminListPage() {
  const router = useRouter();
  const [ admins, setAdmins ] = useState<Admin[]>([]);
  const [ loading, setLoading ] = useState(true);
  const [ search, setSearch ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedId, setSelectedId ] = useState<number | null>(null);

  useEffect(() => {
    loadAdmins();
  }, [ currentPage, search ]);

  const loadAdmins = async () => {
    try {
      setLoading(true);
      const data = await apiClient.getAdmins(currentPage, search);
      
      // data es directamente un array
      setAdmins(data);
      setTotalPages(Math.ceil(data.length / 10));
    } catch (error) {
      console.error('Error loading admins:', error);
      setAdmins([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };



  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedId) return;
    try {
      await apiClient.deleteAdmin(selectedId);
      setMessage('Administrator deleted successfully');
      loadAdmins();
    } catch (error) {
      setMessage('Error deleting administrator');
    } finally {
      setShowModal(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedId(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    loadAdmins();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl bg-white relative">
      <h1 className="text-3xl font-bold mb-6">Administrators</h1>

      {message && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Link
          href="/admins/create"
          className="px-4 py-2 bg-[#47F4FA] text-black rounded hover:bg-cyan-300"
        >
          + New Administrator
        </Link>

        <form onSubmit={handleSearch} className="flex-1 flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by username or email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Username</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Full name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {admins.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No administrators registered
                    </td>
                  </tr>
                ) : (
                  admins.map((admin) => (
                    <tr key={admin.admin_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm">{admin.admin_id}</td>
                      <td className="px-6 py-4 text-sm">{admin.admin_username}</td>
                      <td className="px-6 py-4 text-sm">{admin.admin_email}</td>
                      <td className="px-6 py-4 text-sm">
                        {admin.admin_name} {admin.admin_last_name}
                      </td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <Link
                          href={`/admins/${admin.admin_id}`}
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 transition-colors"
                        >
                          View
                        </Link>

                        <Link
                          href={`/admins/${admin.admin_id}/edit`}
                          className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => handleDeleteClick(admin.admin_id)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Anterior
              </button>
              <span className="px-4 py-2">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                Siguiente
              </button>
            </div>
          )}
        </>
      )}

      {/* 🔹 Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this administrator?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
              >
                Yes, delete
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
