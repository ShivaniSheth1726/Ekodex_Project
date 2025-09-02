import React from "react";

export default function ProfitReport() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    padding: "20px",
    marginTop: "20px",
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
  };

  const tdStyle = {
    padding: "12px",
    fontSize: "14px",
    borderBottom: "1px solid #f3f4f6",
  };

  const data = [
    { title: "Payin", merchantFee: "723,572.05", gatewayFee: "147,895.78", profit: "575,676.27" },
    { title: "Payout", merchantFee: "233,234.99", gatewayFee: "14,555.39", profit: "218,679.60" },
    { title: "Total Chargeback", merchantFee: "-", gatewayFee: "-", profit: "0.00" },
    { title: "Total Expenses", merchantFee: "-", gatewayFee: "-", profit: "0.00" },
    { title: "Total RP Commission", merchantFee: "-", gatewayFee: "-", profit: "0.00" },
  ];

  const summary = [
    { label: "Total Profit", value: "794,355.87" },
    { label: "Total Expenses", value: "0.00" },
    { label: "Total RP Commission", value: "0.00" },
    { label: "Net Profit", value: "794,355.87" },
  ];

  return (
    <div style={containerStyle}>
  
   

      <div style={cardStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>TITLE</th>
              <th style={thStyle}>MERCHANT FEE</th>
              <th style={thStyle}>GATEWAY FEE</th>
              <th style={thStyle}>PROFIT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>{row.title}</td>
                <td style={tdStyle}>{row.merchantFee}</td>
                <td style={tdStyle}>{row.gatewayFee}</td>
                <td style={tdStyle}>{row.profit}</td>
              </tr>
            ))}
            {summary.map((s, idx) => (
              <tr key={`summary-${idx}`}>
                <td style={{ ...tdStyle, fontWeight: "600" }}>{s.label}</td>
                <td style={tdStyle}></td>
                <td style={tdStyle}></td>
                <td style={{ ...tdStyle, fontWeight: "600" }}>{s.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
