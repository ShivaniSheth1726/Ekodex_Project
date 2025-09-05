import React from "react";

export default function InvoiceSchedules() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
  };

  const formRowStyle = {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  };

  const inputStyle = {
    flex: "1",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
  };

  const searchBtn = {
    ...buttonStyle,
    backgroundColor: "#3b82f6",
    color: "#fff",
  };

  const resetBtn = {
    ...buttonStyle,
    backgroundColor: "#f1f5f9",
    color: "#000",
    marginLeft: "10px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontSize: "14px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px 10px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#f9fafb",
    fontWeight: "600",
    color: "#374151",
  };

  const tdStyle = {
    padding: "12px 10px",
    borderBottom: "1px solid #f1f5f9",
    color: "#374151",
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "15px",
    fontSize: "14px",
  };

  const paginationBtn = {
    border: "1px solid #ddd",
    padding: "5px 10px",
    margin: "0 3px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>
        Invoice Schedules
      </h2>

      <div style={cardStyle}>
        <h3 style={headingStyle}>Invoice Schedules</h3>

        {/* Filter Section */}
        <div style={formRowStyle}>
          <input style={inputStyle} placeholder="ID: Enter text..." />
          <input style={inputStyle} placeholder="Name: Enter text..." />
          <input style={inputStyle} placeholder="Merchant: Enter text..." />
          <input style={inputStyle} placeholder="Paused: Enter text..." />
        </div>

        <div>
          <button style={searchBtn}>Search</button>
          <button style={resetBtn}>Reset</button>
        </div>

        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Merchant</th>
              <th style={thStyle}>Interval Length</th>
              <th style={thStyle}>Interval Unit</th>
              <th style={thStyle}>Day of Month</th>
              <th style={thStyle}>Payments Count</th>
              <th style={thStyle}>Delays</th>
              <th style={thStyle}>Paused</th>
              <th style={thStyle}>Creation Date</th>
              <th style={thStyle}>Modification Date</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                bb48e534-3877-11ef-8de5-9693d2c4f3cb
              </td>
              <td style={tdStyle}>test</td>
              <td style={tdStyle}>All</td>
              <td style={tdStyle}>7</td>
              <td style={tdStyle}>day</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>1</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>true</td>
              <td style={tdStyle}>2024-07-02 13:33:56</td>
              <td style={tdStyle}>2024-07-02 13:33:56</td>
              <td style={tdStyle}>▶</td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div style={footerStyle}>
          <span>Showing 1 to 1 of 1 entries</span>
          <div>
            <button style={paginationBtn}>«</button>
            <button style={{ ...paginationBtn, backgroundColor: "#3b82f6", color: "#fff" }}>
              1
            </button>
            <button style={paginationBtn}>»</button>
          </div>
        </div>
      </div>
    </div>
  );
}
