import React from "react";

export default function Notifications() {
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
    justifyContent: "flex-end",
    marginBottom: "10px",
  };

  const dropdownStyle = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
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
      <div style={breadcrumbStyle}>Dashboard &gt; Send Notifications</div>

      {/* Title */}
      <div style={titleStyle}>Notifications</div>

      {/* Header Button */}
      <div style={headerRowStyle}>
        <button style={buttonStyle}>+ Create Notification</button>
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
        </div>

        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>NAME</th>
              <th style={thStyle}>TYPE</th>
              <th style={thStyle}>TITLE</th>
              <th style={thStyle}>DESCRIPTION</th>
              <th style={thStyle}>READ</th>
              <th style={thStyle}>ACCEPT</th>
              <th style={thStyle}>CREATED AT</th>
              <th style={thStyle}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle} colSpan="8">
                No record found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
