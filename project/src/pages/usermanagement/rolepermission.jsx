import React from "react";

const RolesPage = () => {
  return (
    <div style={{ padding: "24px" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "14px", marginBottom: "8px", color: "#555" }}>
        Dashboard &gt; User Management &gt; <span style={{ fontWeight: 500 }}>Roles</span>
      </div>

      {/* Page Title + Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "700", margin: 0 }}>Roles</h2>
        <button
          style={{
            background: "black",
            color: "white",
            padding: "8px 16px",
            borderRadius: "9999px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            border: "none",
          }}
        >
          + Create Role
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead
            style={{
              background: "#f9fafb",
              fontSize: "14px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            <tr>
              <th style={{ padding: "12px 16px" }}>ID</th>
              <th style={{ padding: "12px 16px" }}>NAME</th>
              <th style={{ padding: "12px 16px" }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "14px", color: "#111" }}>
            <tr style={{ borderTop: "1px solid #e5e7eb" }}>
              <td style={{ padding: "12px 16px" }}>1</td>
              <td style={{ padding: "12px 16px" }}>Super Admin</td>
              <td style={{ padding: "12px 16px" }}>
                {/* Action Buttons */}
                <button
                  style={{
                    background: "#f59e0b", // orange
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    marginRight: "6px",
                    cursor: "pointer",
                  }}
                >
                  👁
                </button>
                <button
                  style={{
                    background: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    marginRight: "6px",
                    cursor: "pointer",
                  }}
                >
                  ✏️
                </button>
                <button
                  style={{
                    background: "#ef4444", // red
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    cursor: "pointer",
                  }}
                >
                  🗑
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RolesPage;
