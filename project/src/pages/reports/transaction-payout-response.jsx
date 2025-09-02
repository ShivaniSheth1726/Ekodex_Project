import React from "react";

export default function TransactionSummaryReport() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const leftHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const menuIconStyle = {
    fontSize: "20px",
    cursor: "pointer",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#666",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "5px",
  };

  const rightHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "13px",
    color: "#333",
  };

  const avatarStyle = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "6px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  };

  const buttonRowStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "6px 12px",
    fontSize: "13px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    color: "white",
  };

  const exportBtn = { ...buttonStyle, backgroundColor: "green" };
  const dailyBtn = { ...buttonStyle, backgroundColor: "black" };
  const weeklyBtn = { ...buttonStyle, backgroundColor: "blue" };
  const monthlyBtn = { ...buttonStyle, backgroundColor: "orange" };
  const filterBtn = { ...buttonStyle, backgroundColor: "darkslategray" };
  const resetBtn = { ...buttonStyle, backgroundColor: "red" };

  const tableWrapper = {
    overflowX: "auto",
    width: "100%",
  };

  const tableStyle = {
    minWidth: "1000px",
    borderCollapse: "collapse",
    fontSize: "13px",
    width: "100%",
  };

  const thStyle = {
    textAlign: "left",
    padding: "8px",
    backgroundColor: "#f1f1f1",
    border: "1px solid #ddd",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid #ddd",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        

       
      </div>

      {/* Card */}
      <div style={cardStyle}>
        {/* Buttons */}
        <div style={buttonRowStyle}>
          
          <button style={filterBtn}>⚙ Advance Filter</button>
          <button style={resetBtn}>Reset</button>
        </div>

        {/* Scrollable Table */}
        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>CURRENCY</th>
                <th style={thStyle}>TOTAL TRANSACTION COUNT</th>
                <th style={thStyle}>SUCCESS COUNT</th>
                <th style={thStyle}>SUCCESS AMOUNT</th>
                <th style={thStyle}>SUCCESS PERCENTAGE</th>
                <th style={thStyle}>DECLINE COUNT</th>
                <th style={thStyle}>DECLINE AMOUNT</th>
                <th style={thStyle}>DECLINE PERCENTAGE</th>
                <th style={thStyle}>CHARGEBACK COUNT</th>
                <th style={thStyle}>CHARGEBACK AMOUNT</th>
                <th style={thStyle}>CHARGEBACK PERCENTAGE</th>
                <th style={thStyle}>REFUND COUNT</th>
                <th style={thStyle}>REFUND AMOUNT</th>
                <th style={thStyle}>REFUND PERCENTAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>INR</td>
                <td style={tdStyle}>682</td>
                <td style={tdStyle}>361</td>
                <td style={tdStyle}>482900.00</td>
                <td style={tdStyle}>52.93%</td>
                <td style={tdStyle}>321</td>
                <td style={tdStyle}>617042.00</td>
                <td style={tdStyle}>47.07%</td>
                <td style={tdStyle}>0</td>
                <td style={tdStyle}>0</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>0</td>
                <td style={tdStyle}>0</td>
                <td style={tdStyle}>0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
