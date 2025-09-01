import React, { useState } from "react";

export default function Transactions() {
  const [openMenu, setOpenMenu] = useState(null);

  const tableData = [
    {
      transactionId: "I8G1SPMNB1756715961148",
      orderId: "P12025090114092180060110101",
      utr: "N/A",
      merchant: "DXB- IRON",
      email: "foxylady146900@aol.com",
      connector: "Enpay",
      provider: "SKYPAL",
      status: "In-Process",
      amount: "5000.00",
      webhook: "NA / NA",
      date: "01-09-2025 / 14:09:21",
    },
    {
      transactionId: "IACFTDBWS1756715955337",
      orderId: "P12025090114091580060110101",
      utr: "N/A",
      merchant: "DXB- IRON",
      email: "antin@yahoo.com",
      connector: "Enpay",
      provider: "SKYPAL",
      status: "In-Process",
      amount: "1000.00",
      webhook: "NA / NA",
      date: "01-09-2025 / 14:09:15",
    },
    {
      transactionId: "IOTWWHDH11756715948828",
      orderId: "P12025090114090880060110101",
      utr: "724245495818",
      merchant: "DXB- IRON",
      email: "shivk@mantraonline.com",
      connector: "Enpay",
      provider: "SKYPAL",
      status: "Success",
      amount: "1000.00",
      webhook: "200 / 1",
      date: "01-09-2025 / 14:09:02",
    },
  ];

  const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    header: { fontSize: "22px", fontWeight: "bold", marginBottom: "15px" },
    controls: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
    },
    select: { padding: "6px", borderRadius: "6px" },
    button: {
      padding: "8px 14px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginLeft: "6px",
    },
    deleteBtn: { backgroundColor: "red", color: "white" },
    exportBtn: { backgroundColor: "black", color: "white" },
    filterBtn: { backgroundColor: "#444", color: "white" },
    resetBtn: { backgroundColor: "#ddd", color: "black" },

    /* Scroll wrapper */
    tableWrapper: {
      maxHeight: "350px", // 👈 adjust height as needed
      overflowY: "auto",
      border: "1px solid #eee",
    },

    table: { width: "100%", borderCollapse: "collapse" },
    th: {
      textAlign: "left",
      borderBottom: "2px solid #eee",
      padding: "10px",
      fontSize: "14px",
      position: "sticky", // 👈 keeps header fixed
      top: 0,
      background: "#f9f9f9",
      zIndex: 2,
    },
    td: {
      padding: "10px",
      borderBottom: "1px solid #eee",
      fontSize: "13px",
      position: "relative",
    },
    statusInProcess: {
      background: "orange",
      padding: "4px 10px",
      borderRadius: "10px",
      color: "white",
      fontSize: "12px",
    },
    statusSuccess: {
      background: "green",
      padding: "4px 10px",
      borderRadius: "10px",
      color: "white",
      fontSize: "12px",
    },
    tag: {
      background: "#555",
      color: "white",
      borderRadius: "6px",
      padding: "2px 6px",
      fontSize: "11px",
      marginLeft: "5px",
    },
    actionBtn: {
      border: "none",
      background: "transparent",
      fontSize: "20px",
      cursor: "pointer",
    },
    dropdown: {
      position: "absolute",
      top: "40px",
      right: "10px",
      background: "white",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.15)",
      zIndex: 1,
      width: "180px",
    },
    dropdownItem: {
      padding: "10px",
      cursor: "pointer",
      fontSize: "14px",
      borderBottom: "1px solid #f1f1f1",
    },
    dropdownItemLast: {
      padding: "10px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>All Transactions</h2>

      {/* Top Controls */}
      <div style={styles.controls}>
        <div>
          <select style={styles.select}>
            <option>-- Select Status --</option>
          </select>
          <button style={{ ...styles.button, backgroundColor: "#444", color: "white" }}>
            Move To
          </button>
        </div>
        <div>
          <select style={styles.select}>
            <option>10</option>
          </select>
          <button style={{ ...styles.button, ...styles.deleteBtn }}>Delete All</button>
          <button style={{ ...styles.button, ...styles.exportBtn }}>Export Excel</button>
          <button style={{ ...styles.button, ...styles.filterBtn }}>Advance Filter</button>
          <button style={{ ...styles.button, ...styles.resetBtn }}>Reset</button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}></th>
              <th style={styles.th}>TRANSACTION ID</th>
              <th style={styles.th}>ORDER ID</th>
              <th style={styles.th}>UTR</th>
              <th style={styles.th}>MERCHANT NAME</th>
              <th style={styles.th}>CONNECTOR</th>
              <th style={styles.th}>STATUS</th>
              <th style={styles.th}>AMOUNT</th>
              <th style={styles.th}>WEBHOOK</th>
              <th style={styles.th}>TRANSACTION DATE</th>
              <th style={styles.th}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td style={styles.td}>
                  <input type="checkbox" />
                </td>
                <td style={styles.td}>
                  {row.transactionId}
                  <span style={styles.tag}>API</span>
                </td>
                <td style={styles.td}>{row.orderId}</td>
                <td style={styles.td}>{row.utr}</td>
                <td style={styles.td}>
                  {row.merchant}
                  <br />
                  <small>{row.email}</small>
                </td>
                <td style={styles.td}>
                  {row.connector}
                  <span style={styles.tag}>{row.provider}</span>
                </td>
                <td style={styles.td}>
                  <span
                    style={
                      row.status === "Success"
                        ? styles.statusSuccess
                        : styles.statusInProcess
                    }
                  >
                    {row.status}
                  </span>
                </td>
                <td style={styles.td}>{row.amount}</td>
                <td style={styles.td}>{row.webhook}</td>
                <td style={styles.td}>{row.date}</td>
                <td style={styles.td}>
                  <button
                    style={styles.actionBtn}
                    onClick={() => setOpenMenu(openMenu === index ? null : index)}
                  >
                    ⋮
                  </button>
                  {openMenu === index && (
                    <div style={styles.dropdown}>
                      <div style={styles.dropdownItem}>👁 Show</div>
                      <div style={styles.dropdownItem}>📜 Merchant API Log</div>
                      <div style={styles.dropdownItem}>💻 Session Log</div>
                      <div style={styles.dropdownItemLast}>🗂 PSP Logs in Storage</div>
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
