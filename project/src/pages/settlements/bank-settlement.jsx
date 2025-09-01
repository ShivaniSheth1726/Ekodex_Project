import React from "react";

export default function BankSettlementHistory() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  const titleBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

 

  const createButton = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const topBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const leftStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const selectStyle = {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const button = {
    padding: "8px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    marginLeft: "8px",
  };

  const buttonBlack = { ...button, backgroundColor: "#000", color: "#fff" };
  const buttonFilter = { ...button, backgroundColor: "#333", color: "#fff" };
  const buttonRed = {
    ...button,
    backgroundColor: "#d9534f",
    color: "#fff",
    borderRadius: "6px",
  };

  const tableWrapper = {
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "800px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#f1f1f1",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
  

      {/* Title + Create Button */}
      {/* Create Button Right Side */}
    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <button style={createButton}>+ Create</button>
    </div>


      <div style={cardStyle}>
        {/* Top Bar */}
        <div style={topBarStyle}>
          <div style={leftStyle}>
            <label htmlFor="pageSize" style={{ fontSize: "14px" }}>
              Show:
            </label>
            <select id="pageSize" style={selectStyle}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div>
            <button style={buttonBlack}>⬇ Export Excel</button>
            <button style={buttonFilter}>🔍 Advance Filter</button>
            <button style={buttonRed}>Reset</button>
          </div>
        </div>

        {/* Table */}
        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>SETTLEMENT DATE</th>
                <th style={thStyle}>CONNECTOR</th>
                <th style={thStyle}>CONNECTOR ACCOUNT</th>
                <th style={thStyle}>SETTLEMENT AMOUNT</th>
                <th style={thStyle}>CREATED DATE</th>
                <th style={thStyle}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>27-08-2025</td>
                <td style={tdStyle}>Enpay</td>
                <td style={tdStyle}>SKYPAL</td>
                <td style={tdStyle}>400000.00</td>
                <td style={tdStyle}>2025-08-27 12:59:19</td>
                <td style={tdStyle}>⋮</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
