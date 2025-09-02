import React from "react";

export default function Tickets() {
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

  const actionBtnsStyle = {
    display: "flex",
    gap: "10px",
  };

  const filterBtnStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const resetBtnStyle = {
    backgroundColor: "#d9534f",
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
    overflowX: "auto",
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
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap",
  };

  const badgeStyle = (color) => ({
    backgroundColor: color,
    color: "white",
    borderRadius: "8px",
    padding: "2px 8px",
    fontSize: "12px",
    fontWeight: "bold",
  });

  return (
    <div style={containerStyle}>
      {/* Breadcrumb */}
      <div style={breadcrumbStyle}>Dashboard &gt; Tickets</div>

      {/* Title */}
      <div style={titleStyle}>Tickets</div>

      {/* Top row: Dropdown + Buttons */}
      <div style={topRowStyle}>
        <select style={dropdownStyle}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <div style={actionBtnsStyle}>
          <button style={filterBtnStyle}>🔍 Advance Filter</button>
          <button style={resetBtnStyle}>Reset</button>
        </div>
      </div>

      {/* Table */}
      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>TICKET ID</th>
              <th style={thStyle}>COMPANY NAME</th>
              <th style={thStyle}>TRANSACTION TYPE</th>
              <th style={thStyle}>TRANSACTION ID</th>
              <th style={thStyle}>CONNECTOR</th>
              <th style={thStyle}>TITLE</th>
              <th style={thStyle}>DESCRIPTION</th>
              <th style={thStyle}>DATE CREATED</th>
              <th style={thStyle}>STATUS</th>
              <th style={thStyle}>DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...tdStyle, fontWeight: "bold" }}>TC2508137378</td>
              <td style={tdStyle}>
                Dev Team <br />
                <span style={{ fontSize: "12px", color: "#555" }}>
                  (developer@rokadpay.com)
                </span>
              </td>
              <td style={tdStyle}>Payin</td>
              <td style={tdStyle}>IKP3O1N7KI755066074285</td>
              <td style={tdStyle}>
                Logista <br />
                <span style={badgeStyle("purple")}>Abandoned</span>
              </td>
              <td style={tdStyle}>test</td>
              <td style={tdStyle}>test</td>
              <td style={tdStyle}>13-08-2025</td>
              <td style={tdStyle}>
                <span style={badgeStyle("black")}>Pending</span>
              </td>
              <td style={tdStyle}>
                <span style={badgeStyle("black")}>Technical</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
