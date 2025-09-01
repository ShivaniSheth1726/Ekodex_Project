import React, { useState } from "react";

export default function PayoutsTransaction() {
  const [openMenu, setOpenMenu] = useState(null);

  const data = [
    {
      transactionId: "OHRRPWLBI1756723495286",
      orderId: "1756723494",
      utr: "524426107065",
      status: "Success",
      merchant: "Kevin",
      account: "110111706343",
      connector: "PayoutOriel SKYPAL",
      amount: "41700.00",
      mode: "IMPS",
      type: "API",
      webhook: "419 / 1",
      createdAt: "2025-09-01 16:14:58",
    },
    {
      transactionId: "OB86F3PKFI756723269985",
      orderId: "1756723269",
      utr: "524425111989",
      status: "Success",
      merchant: "Kevin",
      account: "159845004355",
      connector: "PayoutOriel SKYPAL",
      amount: "3000.00",
      mode: "IMPS",
      type: "API",
      webhook: "419 / 1",
      createdAt: "2025-09-01 16:10:53",
    },
    {
      transactionId: "OHOZ8T7CGI756723250209",
      orderId: "1756723249",
      utr: "524426106368",
      status: "Success",
      merchant: "Kevin",
      account: "10462041058957",
      connector: "PayoutOriel SKYPAL",
      amount: "2500.00",
      mode: "IMPS",
      type: "API",
      webhook: "419 / 1",
      createdAt: "2025-09-01 16:10:24",
    },
    {
      transactionId: "O3AZWLBI1756723206165",
      orderId: "1756723205",
      utr: "524426106247",
      status: "Success",
      merchant: "Kevin",
      account: "89480100017572",
      connector: "PayoutOriel SKYPAL",
      amount: "5000.00",
      mode: "IMPS",
      type: "API",
      webhook: "419 / 1",
      createdAt: "2025-09-01 16:10:24",
    },
    {
      transactionId: "OZU1I82VA1756723156721",
      orderId: "1756723156",
      utr: "NA",
      status: "Pending",
      merchant: "Kevin",
      account: "12810100136645",
      connector: "PayoutOriel SKYPAL",
      amount: "5500.00",
      mode: "IMPS",
      type: "API",
      webhook: "0 / 0",
      createdAt: "2025-09-01 16:10:57",
    },
  ];

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    breadcrumb: { fontSize: "14px", color: "#666", marginBottom: "8px" },
    headerRow: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginBottom: "15px",
    },
    title: { fontSize: "22px", fontWeight: "bold" },
    createBtn: {
      padding: "8px 16px",
      backgroundColor: "black",
      color: "white",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
    },
    controls: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    select: {
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "14px",
    },
    btnGroup: { display: "flex", gap: "8px" },
    btn: {
      padding: "8px 14px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "14px",
    },
    exportBtn: { backgroundColor: "black", color: "white" },
    filterBtn: { backgroundColor: "#333", color: "white" },
    resetBtn: { backgroundColor: "#d9534f", color: "white" },
    tableWrapper: { border: "1px solid #eee", borderRadius: "6px", overflowX: "auto" },
    table: { width: "100%", borderCollapse: "collapse" },
    th: {
      textAlign: "left",
      padding: "10px",
      borderBottom: "2px solid #eee",
      fontSize: "14px",
      background: "#f9f9f9",
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #eee",
      fontSize: "13px",
      position: "relative",
      whiteSpace: "nowrap",
    },
    link: { color: "blue", cursor: "pointer", textDecoration: "underline" },
    status: (type) => ({
      display: "inline-block",
      padding: "3px 8px",
      borderRadius: "10px",
      fontSize: "12px",
      marginRight: "5px",
      background:
        type === "Success"
          ? "green"
          : type === "Pending"
          ? "orange"
          : "red",
      color: "white",
    }),
    actionBtn: {
      border: "1px solid #ccc",
      background: "white",
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      cursor: "pointer",
      fontSize: "18px",
    },
    dropdown: {
      position: "absolute",
      top: "40px",
      right: "10px",
      background: "white",
      border: "1px solid #ddd",
      borderRadius: "6px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
      zIndex: 1,
      width: "150px",
    },
    dropdownItem: {
      padding: "10px",
      fontSize: "14px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb + Title */}
     
      <div style={styles.headerRow}>
       
        <button style={styles.createBtn}>+ Create Payout</button>
      </div>

      {/* Controls */}
      <div style={styles.controls}>
        <select style={styles.select}>
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
        <div style={styles.btnGroup}>
          <button style={{ ...styles.btn, ...styles.exportBtn }}>⬇ Export Excel</button>
          <button style={{ ...styles.btn, ...styles.filterBtn }}>⚲ Advance Filter</button>
          <button style={{ ...styles.btn, ...styles.resetBtn }}>Reset</button>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>TRANSACTION ID</th>
              <th style={styles.th}>ORDER ID</th>
              <th style={styles.th}>UTR</th>
              <th style={styles.th}>STATUS</th>
              <th style={styles.th}>MERCHANT NAME</th>
              <th style={styles.th}>ACCOUNT NUMBER</th>
              <th style={styles.th}>CONNECTOR</th>
              <th style={styles.th}>AMOUNT (INR)</th>
              <th style={styles.th}>PAYMENT MODE</th>
              <th style={styles.th}>TYPE</th>
              <th style={styles.th}>WEBHOOK</th>
              <th style={styles.th}>CREATED AT</th>
              <th style={styles.th}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.transactionId}>
                <td style={styles.td}>
                  <span style={styles.link}>{row.transactionId}</span>
                </td>
                <td style={styles.td}>{row.orderId}</td>
                <td style={styles.td}>{row.utr}</td>
                <td style={styles.td}>
                  <span style={styles.status(row.status)}>{row.status}</span>
                </td>
                <td style={styles.td}>{row.merchant}</td>
                <td style={styles.td}>{row.account}</td>
                <td style={styles.td}>{row.connector}</td>
                <td style={styles.td}>{row.amount}</td>
                <td style={styles.td}>{row.mode}</td>
                <td style={styles.td}>{row.type}</td>
                <td style={styles.td}>{row.webhook}</td>
                <td style={styles.td}>{row.createdAt}</td>
                <td style={styles.td}>
                  <button
                    style={styles.actionBtn}
                    onClick={() =>
                      setOpenMenu(openMenu === row.transactionId ? null : row.transactionId)
                    }
                  >
                    ⋮
                  </button>
                  {openMenu === row.transactionId && (
                    <div style={styles.dropdown}>
                      <div style={styles.dropdownItem}>ℹ API Log</div>
                      <div style={styles.dropdownItem}>📋 Copy UTR</div>
                      <div style={styles.dropdownItem}>🔄 Retry</div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
