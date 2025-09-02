import React from "react";

export default function MerchantTurnoverReport() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginTop: "20px",
    overflow: "hidden",
  };

  const buttonContainer = {
    display: "flex",
    gap: "10px",
    padding: "15px 20px",
    borderBottom: "1px solid #e5e7eb",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
  };

  const exportBtn = {
    ...buttonStyle,
    backgroundColor: "#22c55e",
    color: "white",
  };

  const filterBtn = {
    ...buttonStyle,
    backgroundColor: "#111827",
    color: "white",
  };

  const resetBtn = {
    ...buttonStyle,
    backgroundColor: "#dc2626",
    color: "white",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px",
    fontWeight: "600",
    fontSize: "14px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
  };

  const tdStyle = {
    padding: "12px",
    fontSize: "14px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={breadcrumbStyle}>
        Dashboard &gt; Report &gt; Merchant Turnover Report
      </div>
      <div style={headerStyle}>Report</div>

      <div style={cardStyle}>
        {/* Buttons */}
        <div style={buttonContainer}>
          <button style={exportBtn}>⬇ Export</button>
          <button style={filterBtn}>🔎 Advance Filter</button>
          <button style={resetBtn}>Reset</button>
        </div>

        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>DATE</th>
              <th style={thStyle}>SUCCESSFUL AMOUNT(INR) / COUNT</th>
              <th style={thStyle}>DECLINED AMOUNT(INR) / COUNT</th>
              <th style={thStyle}>APPROVAL RATIO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle} colSpan="4">
                No record available!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
