import React, { useState } from "react";

export default function MerchantSettlementHistory() {
  const [page, setPage] = useState(1);

  const data = [
    { name: "Kevin", amount: "800000.00", date: "2025-08-31 19:10:27" },
    { name: "DXB- IRON", amount: "1143372.50", date: "2025-08-31 18:02:09" },
    { name: "DXB- IRON", amount: "500000.00", date: "2025-08-31 10:03:21" },
    { name: "DXB- IRON", amount: "500000.00", date: "2025-08-30 18:30:11" },
    { name: "DXB- IRON", amount: "250000.00", date: "2025-08-30 12:13:00" },
    { name: "DXB- IRON", amount: "800000.00", date: "2025-08-29 20:27:19" },
    { name: "DXB- IRON", amount: "500000.00", date: "2025-08-29 08:51:57" },
    { name: "DXB- IRON", amount: "700000.00", date: "2025-08-28 15:54:50" },
    { name: "DXB- IRON", amount: "450000.00", date: "2025-08-28 10:33:54" },
    { name: "DXB- IRON", amount: "400000.00", date: "2025-08-27 12:20:56" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
        Dashboard &gt; <span style={{ color: "#000" }}>Settlement History</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Merchant Settlement History</h1>

      {/* Card */}
      <div style={{
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        padding: "20px"
      }}>
        {/* Top Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <select
            style={{
              padding: "6px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px"
            }}
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>

          <div style={{ display: "flex", gap: "10px" }}>
            <button style={styles.blackBtn}>⬇ Export Excel</button>
            <button style={styles.blackBtn}>⚲ Advance Filter</button>
            <button style={styles.redBtn}>Reset</button>
          </div>
        </div>

        {/* Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead style={{ backgroundColor: "#f9fafb", textAlign: "left" }}>
            <tr>
              <th style={styles.th}>MERCHANT NAME</th>
              <th style={styles.th}>SETTLEMENT AMOUNT</th>
              <th style={styles.th}>CREATED DATE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={styles.td}>{row.name}</td>
                <td style={styles.td}>{row.amount}</td>
                <td style={styles.td}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px" }}>
          <p style={{ fontSize: "12px", color: "#6b7280" }}>Showing 1 to 10 of 37 results</p>

          {/* Pagination */}
          <div style={{ display: "flex", gap: "6px" }}>
            <button style={styles.pageBtn}>&lt;</button>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                style={{
                  ...styles.pageBtn,
                  backgroundColor: page === num ? "#2563eb" : "white",
                  color: page === num ? "white" : "black",
                  border: page === num ? "1px solid #2563eb" : "1px solid #d1d5db"
                }}
              >
                {num}
              </button>
            ))}
            <button style={styles.pageBtn}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  th: {
    padding: "12px 8px",
    fontWeight: "600",
    borderBottom: "1px solid #e5e7eb"
  },
  td: {
    padding: "12px 8px",
    verticalAlign: "middle"
  },
  blackBtn: {
    padding: "8px 14px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px"
  },
  redBtn: {
    padding: "8px 14px",
    backgroundColor: "#ef4444",
    color: "white",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px"
  },
  pageBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    cursor: "pointer",
    fontSize: "14px",
    backgroundColor: "white"
  }
};
