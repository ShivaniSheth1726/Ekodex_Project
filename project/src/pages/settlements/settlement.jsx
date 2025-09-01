import React, { useState } from "react";

export default function PayoutsSettlement() {
  const [openMenu, setOpenMenu] = useState(null);

  const data = [
    {
      id: 1,
      name: "Dev Team",
      email: "developer@rokadpay.com",
      balance: "2697.76",
    },
    {
      id: 2,
      name: "DXB- IRON",
      email: "dxb@rokadpay.com",
      balance: "1216743.50",
    },
    {
      id: 3,
      name: "Vineet",
      email: "vineet@embracive.in",
      balance: "0.00",
    },
    {
      id: 4,
      name: "Josh B",
      email: "joshb@techptm.com",
      balance: "0.00",
    },
    {
      id: 5,
      name: "Diljit",
      email: "rockybhaiya785@gmail.com",
      balance: "0.00",
    },
    {
      id: 6,
      name: "Kevin",
      email: "randomid869@gmail.com",
      balance: "1995803.61",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
        Dashboard &gt; <span style={{ color: "#000" }}>Payout Settlement</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Payouts Settlement</h1>

      {/* Card */}
      <div style={{
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        padding: "20px"
      }}>
        {/* Input Row */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>
            Enter Settlement amount: <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #d1d5db",
              outline: "none",
              fontSize: "14px"
            }}
          />
          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              float: "right"
            }}
          >
            Submit
          </button>
        </div>

        {/* Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
          <thead style={{ backgroundColor: "#f9fafb", textAlign: "left" }}>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>SELECT</th>
              <th style={styles.th}>MERCHANT NAME</th>
              <th style={styles.th}>MERCHANT EMAIL</th>
              <th style={styles.th}>UNSETTLE BALANCE</th>
              <th style={styles.th}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={styles.td}>
                  <span style={{ color: "blue", cursor: "pointer" }}>{row.id}</span>
                </td>
                <td style={styles.td}>
                  <input type="checkbox" />
                </td>
                <td style={styles.td}>{row.name}</td>
                <td style={styles.td}>{row.email}</td>
                <td style={styles.td}>{row.balance}</td>
                <td style={styles.td}>
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => setOpenMenu(openMenu === row.id ? null : row.id)}
                      style={{
                        border: "1px solid #d1d5db",
                        borderRadius: "50%",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                        background: "white"
                      }}
                    >
                      ⋮
                    </button>
                    {openMenu === row.id && (
                      <div
                        style={{
                          position: "absolute",
                          right: "40px",
                          top: "0",
                          backgroundColor: "white",
                          border: "1px solid #e5e7eb",
                          borderRadius: "8px",
                          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                          padding: "10px",
                          minWidth: "180px",
                          zIndex: 10
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                          👁️ Apexio Settlement
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  th: {
    padding: "12px 8px",
    fontWeight: "600",
    borderBottom: "1px solid #e5e7eb"
  },
  td: {
    padding: "12px 8px",
    verticalAlign: "middle"
  }
};
