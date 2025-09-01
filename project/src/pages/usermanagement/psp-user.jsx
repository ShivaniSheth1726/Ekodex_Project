import { useState } from "react";
import { Filter, Download, MoreVertical, Trash2 } from "lucide-react";

export default function MerchantUsersPage() {
  const [pageSize, setPageSize] = useState(10);

  const users = []; // empty → "No record available!" message will show

  return (
    <main style={{ minHeight: "100vh", background: "#f9fafb", padding: "24px" }}>
      {/* Table Card */}
      <div
        style={{
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          padding: "16px",
        }}
      >
        {/* Top Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
            alignItems: "center",
          }}
        >
          {/* Page size dropdown */}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#dc2626",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
              }}
            >
              <Trash2 size={16} /> Delete All
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "black",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
              }}
            >
              <Download size={16} /> Export Excel
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#111827",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
              }}
            >
              <Filter size={16} /> Advance Filter
            </button>

            <button
              style={{
                background: "#ef4444",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ background: "#f9fafb", color: "#374151" }}>
                <th style={{ padding: "10px" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ padding: "10px", fontWeight: "600" }}>NAME</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>EMAIL</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>STAGE</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>STATUS</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>IS VERIFIED</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>CREATED AT</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="8"
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      color: "#6b7280",
                    }}
                  >
                    No record available!
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr
                    key={u.id}
                    style={{
                      borderBottom: "1px solid #e5e7eb",
                      color: "#374151",
                    }}
                  >
                    <td style={{ padding: "10px" }}>
                      <input type="checkbox" />
                    </td>
                    <td style={{ padding: "10px" }}>{u.name}</td>
                    <td style={{ padding: "10px" }}>{u.email}</td>
                    <td style={{ padding: "10px" }}>Stage</td>
                    <td style={{ padding: "10px" }}>{u.status ? "Active" : "Inactive"}</td>
                    <td style={{ padding: "10px" }}>{u.verified ? "Yes" : "No"}</td>
                    <td style={{ padding: "10px" }}>{u.createdAt}</td>
                    <td style={{ padding: "10px" }}>
                      <button
                        style={{
                          padding: "6px",
                          borderRadius: "50%",
                          cursor: "pointer",
                          background: "transparent",
                        }}
                      >
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
