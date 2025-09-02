import React from "react";

export default function ArchivedTransactions() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "14px", color: "#6c757d", marginBottom: "10px" }}>
        Dashboard &gt; <span style={{ color: "#000" }}>All Archived Transactions</span>
      </div>

      {/* Heading */}
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        All Archived Transactions
      </h2>

      {/* Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        {/* Top Section */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "center" }}>
          {/* Dropdown */}
          <select
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
            }}
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                background: "#d9534f",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "8px 18px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Delete All
            </button>
            <button
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "8px 18px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              ⬇ Export Excel
            </button>
            <button
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "8px 18px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              🔍 Advance Filter
            </button>
            <button
              style={{
                background: "#d9534f",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "8px 18px",
                cursor: "pointer",
                fontSize: "14px",
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
              minWidth: "1000px",
            }}
          >
            <thead>
              <tr style={{ background: "#f1f1f1", textAlign: "left" }}>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>TRANSACTION ID</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>MERCHANT NAME</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>CONNECTOR</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>CONNECTOR ACCOUNT</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>STATUS</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>AMOUNT</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>CURRENCY</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>COUNTRY</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>EMAIL</th>
                <th style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>TRANSACTION DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="11" style={{ textAlign: "center", padding: "20px", color: "#777" }}>
                  No record available!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
