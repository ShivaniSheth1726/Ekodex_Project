import React from "react";

export default function RiskManagement() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const headerRowStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const tableWrapperStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    border: "1px solid #eee",
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  };

  const dropdownStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const deleteBtnStyle = {
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #eee",
  };

  const tdStyle = {
    textAlign: "center",
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #eee",
  };

  return (
    <div style={containerStyle}>
      {/* Breadcrumb */}
      <div style={breadcrumbStyle}>Dashboard &gt; Risk Management</div>

      {/* Title */}
      <div style={titleStyle}>Risk Management</div>

      {/* Action Buttons */}
      <div style={headerRowStyle}>
        <button style={buttonStyle}>+ Bulk Upload</button>
        <button style={buttonStyle}>+ Create Risk Management</button>
      </div>

      {/* Table Wrapper */}
      <div style={tableWrapperStyle}>
        {/* Top Row */}
        <div style={topRowStyle}>
          <select style={dropdownStyle}>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <button style={deleteBtnStyle}>🗑 Delete All</button>
        </div>

        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>
                <input type="checkbox" />
              </th>
              <th style={thStyle}>RISK TYPE</th>
              <th style={thStyle}>RISK VALUE</th>
              <th style={thStyle}>CREATED AT</th>
              <th style={thStyle}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle} colSpan="5">
                No record found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
