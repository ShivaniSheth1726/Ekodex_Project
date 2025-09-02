import React from "react";

export default function chargeback() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "5px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const topBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const dropdownStyle = {
    padding: "8px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const actionBtnsStyle = {
    display: "flex",
    gap: "10px",
  };

  const exportBtnStyle = {
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
    padding: "0",
    border: "1px solid #eee",
    overflowX: "auto",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    borderBottom: "1px solid #eee",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "12px",
    fontSize: "14px",
    color: "#333",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
    

      {/* Top bar */}
      <div style={topBarStyle}>
        <select style={dropdownStyle}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <div style={actionBtnsStyle}>
          <button style={exportBtnStyle}>⬇ Export Excel</button>
          <button style={filterBtnStyle}>⚲ Advance Filter</button>
          <button style={resetBtnStyle}>Reset</button>
        </div>
      </div>

      {/* Table */}
      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}></th>
                          <th style={thStyle}>TRANSACTION ID</th>
                          <th style={thStyle}>CHARGEBACK DATE</th>
                          <th style={thStyle}>MERCHANT NAME</th>
                          <th style={thStyle}>CONNECTOR</th>
              <th style={thStyle}>EMAIL</th>
              <th style={thStyle}>AMOUNT</th>
              <th style={thStyle}>CURRENCY</th>
             
              <th style={thStyle}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle} colSpan="9">
                No record available!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
