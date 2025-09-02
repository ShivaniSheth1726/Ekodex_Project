import React from "react";

export default function MerchantTransactionReport() {
  const container = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumb = {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "10px",
  };

  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const card = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
  };

  const topBar = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: "15px",
      gap: "10px",
      position: "relative",
      left: "230px",
  };

  const btn = {
    border: "none",
    borderRadius: "6px",
    padding: "8px 14px",
    fontSize: "14px",
    cursor: "pointer",
    color: "#fff",
  };

  const exportBtn = { ...btn, backgroundColor: "#28a745" };
  const filterBtn = { ...btn, backgroundColor: "#000" };
  const resetBtn = { ...btn, backgroundColor: "#dc3545" };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
  };

  const th = {
    textAlign: "left",
    borderBottom: "1px solid #dee2e6",
    padding: "12px 10px",
    backgroundColor: "#f9f9f9",
    fontWeight: "600",
    fontSize: "14px",
  };

  const td = {
    padding: "12px 10px",
    borderBottom: "1px solid #dee2e6",
    fontSize: "14px",
  };

  const tdBold = { ...td, fontWeight: "bold" };

  const sideMenu = {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const menuBtn = (active) => ({
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    backgroundColor: active ? "#3b82f6" : "#fff",
    color: active ? "#fff" : "#000",
    cursor: "pointer",
    textAlign: "left",
    fontSize: "14px",
  });

  return (
    <div style={container}>
     

      {/* Card */}
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Table */}
          <div style={{ flex: 1 }}>
            <div style={topBar}>
              <button style={exportBtn}>Export</button>
              <button style={filterBtn}>Advance Filter</button>
              <button style={resetBtn}>Reset</button>
            </div>

            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>MERCHANT</th>
                  <th style={th}>COUNT</th>
                  <th style={th}>SUCCESSFUL AMOUNT (INR)</th>
                  <th style={th}>PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={td}>DXB- IRON</td>
                  <td style={td}>203</td>
                  <td style={td}>225700.00</td>
                  <td style={td}>46.14</td>
                </tr>
                <tr>
                  <td style={td}>Kevin</td>
                  <td style={td}>89</td>
                  <td style={td}>177030.00</td>
                  <td style={td}>46.11</td>
                </tr>
                <tr>
                  <td style={tdBold}></td>
                  <td style={tdBold}>292</td>
                  <td style={tdBold}>402730.00</td>
                  <td style={td}></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Side Menu */}
          <div style={{ width: "200px", marginLeft: "20px", position: "relative", top: "40px" }}>
            <div style={sideMenu}>
              <button style={menuBtn(true)}>Successful</button>
              <button style={menuBtn(false)}>Declined</button>
              <button style={menuBtn(false)}>Chargebacks</button>
              <button style={menuBtn(false)}>Refund</button>
            </div>
          </div>
        </div>
          </div>
          
    </div>
  );
}
