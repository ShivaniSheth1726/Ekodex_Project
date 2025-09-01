import { useState } from "react";
import { Eye, Pencil, Trash2, Filter } from "lucide-react";

export default function AdminUsersPage() {
  const [pageSize, setPageSize] = useState(10);

  const users = [
    { id: 1, name: "Super Admin", email: "rokad@gmail.com", role: "Super Admin", status: "Active" },
    { id: 2, name: "Admin", email: "admin@rokad.com", role: "Super Admin", status: "Active" },
    { id: 3, name: "The Rock", email: "rock@gmail.com", role: "Super Admin", status: "Inactive" },
  ];

  return (
    <main className="admin-page">
      {/* Inline CSS */}
      <style>{`
        .admin-page {
          min-height: 100vh;
          background: #f9fafb;
          padding: 2rem;
          font-family: "Inter", sans-serif;
        }
        .breadcrumb ol {
          display: flex;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1rem;
        }
        .breadcrumb li {
          cursor: pointer;
          transition: color 0.2s;
        }
        .breadcrumb li:hover {
          color: #111827;
        }
        .breadcrumb .active {
          font-weight: 600;
          color: #374151;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .header h1 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1f2937;
        }
        .create-btn {
          background: black;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          transition: 0.3s;
        }
        .create-btn:hover {
          background: #374151;
        }
        .table-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        }
        .controls {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .controls select {
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
        }
        .btn-group {
          display: flex;
          gap: 0.75rem;
        }
        .filter-btn, .reset-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .filter-btn {
          background: black;
        }
        .filter-btn:hover {
          background: #374151;
        }
        .reset-btn {
          background: #dc2626;
        }
        .reset-btn:hover {
          background: #b91c1c;
        }
        .table-wrapper {
          overflow-x: auto;
        }
        .table-wrapper table {
          width: 100%;
          border-collapse: collapse;
        }
        thead {
          background: #f3f4f6;
          color: #4b5563;
          font-size: 0.875rem;
        }
        th, td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }
        td {
          font-size: 0.875rem;
          color: #374151;
        }
        tbody tr:hover {
          background: #f9fafb;
        }
        .status {
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          border-radius: 9999px;
          font-weight: 500;
        }
        .status.active {
          background: #d1fae5;
          color: #065f46;
        }
        .status.inactive {
          background: #fee2e2;
          color: #991b1b;
        }
        .action-btns {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .action-btns button {
          padding: 0.5rem;
          border-radius: 9999px;
          color: white;
          display: flex;
          align-items: center;
          transition: 0.3s;
        }
        .action-btns button.view {
          background: #f59e0b;
        }
        .action-btns button.view:hover {
          background: #d97706;
        }
        .action-btns button.edit {
          background: #2563eb;
        }
        .action-btns button.edit:hover {
          background: #1d4ed8;
        }
        .action-btns button.delete {
          background: #dc2626;
        }
        .action-btns button.delete:hover {
          background: #b91c1c;
        }
      `}</style>
      {/* Title & Button */}
      <div className="header">

        <button className="create-btn">+ Create Admin User</button>
      </div>

      {/* Table Container */}
      <div className="table-card">
        {/* Top controls */}
        <div className="controls">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            <option value={10}>10 rows</option>
            <option value={25}>25 rows</option>
            <option value={50}>50 rows</option>
          </select>

          <div className="btn-group">
            <button className="filter-btn">
              <Filter size={16} /> Advance Filter
            </button>
            <button className="reset-btn">Reset</button>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>STATUS</th>
                <th className="actions">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`status ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="action-btns">
                    <button className="view">
                      <Eye size={16} />
                    </button>
                    <button className="edit">
                      <Pencil size={16} />
                    </button>
                    <button className="delete">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
