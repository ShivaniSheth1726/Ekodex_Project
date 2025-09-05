import React from "react";

export default function FeeConstructor() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      padding: "20px",
      minHeight: "100vh",
    },
    header: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "10px",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: "14px",
      margin: "20px 0 10px 0",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "20px",
    },
    th: {
      textAlign: "left",
      padding: "10px",
      fontSize: "13px",
      color: "#6c757d",
      borderBottom: "1px solid #eaeaea",
    },
    td: {
      padding: "10px",
      fontSize: "14px",
      borderBottom: "1px solid #eaeaea",
    },
    link: {
      color: "#007bff",
      textDecoration: "none",
      fontSize: "13px",
      cursor: "pointer",
    },
    addButton: {
      display: "inline-block",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      textAlign: "center",
      lineHeight: "32px",
      fontWeight: "bold",
      fontSize: "20px",
      cursor: "pointer",
      margin: "10px 0",
    },
    actionIcon: {
      fontSize: "16px",
      color: "#6c757d",
      cursor: "pointer",
    },
  };

  const transactionData = [
    {
      feeName: "newplan",
      description: "sale succ",
      type: "ARBITRATION",
      status: "success",
      creationDate: "2025-06-08 12:23:06",
      modificationDate: "2025-09-02 12:48:46",
    },
    {
      feeName: "Sale",
      description: "sale succ",
      type: "SALE",
      status: "success",
      creationDate: "2024-10-29 13:52:21",
      modificationDate: "2025-09-02 12:48:46",
    },
    {
      feeName: "tax fee",
      description: "TEST12",
      type: "TRANSFER",
      status: "success",
      creationDate: "2024-06-05 18:07:44",
      modificationDate: "2025-09-02 12:48:46",
    },
  ];

  const recurrentData = [
    {
      feeName: "LIC",
      description: "License Fee",
      cycle: "yearly",
      start: "immediately",
      finish: "never",
      creationDate: "2025-07-01 12:55:52",
      modificationDate: "2025-09-02 15:03:51",
    },
    {
      feeName: "Monthly fee",
      description: "",
      cycle: "monthly",
      start: "immediately",
      finish: "never",
      creationDate: "2023-03-24 13:37:09",
      modificationDate: "2025-09-02 15:03:51",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.header}>Billing &gt; Fee Constructor</div>

      {/* Main Card */}
      <div style={styles.card}>
        <div style={styles.cardTitle}>Fee Constructor</div>

        {/* Transaction Related Section */}
        <div style={styles.sectionTitle}>Transaction-related</div>
        <div style={styles.link}>Per transaction</div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Fee name</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Transaction type</th>
              <th style={styles.th}>Transaction status</th>
              <th style={styles.th}>Creation Date</th>
              <th style={styles.th}>Modification Date</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((row, index) => (
              <tr key={index}>
                <td style={styles.td}>{row.feeName}</td>
                <td style={styles.td}>{row.description}</td>
                <td style={styles.td}>{row.type}</td>
                <td style={styles.td}>{row.status}</td>
                <td style={styles.td}>{row.creationDate}</td>
                <td style={styles.td}>{row.modificationDate}</td>
                <td style={styles.td}>
                  <span style={styles.actionIcon}>🔗</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.addButton}>+</div>

        {/* Rolling Reserve */}
        <div style={styles.sectionTitle}>
          <span style={styles.link}>Rolling reserve</span>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Fee name</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Transaction type</th>
              <th style={styles.th}>Transaction status</th>
              <th style={styles.th}>Creation Date</th>
              <th style={styles.th}>Modification Date</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>Rolling Reserve</td>
              <td style={styles.td}></td>
              <td style={styles.td}>CAPTURE, SALE</td>
              <td style={styles.td}>success</td>
              <td style={styles.td}>2023-03-24 18:36:33</td>
              <td style={styles.td}>2025-09-02 12:48:46</td>
              <td style={styles.td}>
                <span style={styles.actionIcon}>🔗</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Recurrent Section */}
        <div style={styles.sectionTitle}>Recurrent</div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Fee name</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Billing Cycle</th>
              <th style={styles.th}>Start</th>
              <th style={styles.th}>Finish</th>
              <th style={styles.th}>Creation Date</th>
              <th style={styles.th}>Modification Date</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recurrentData.map((row, index) => (
              <tr key={index}>
                <td style={styles.td}>{row.feeName}</td>
                <td style={styles.td}>{row.description}</td>
                <td style={styles.td}>{row.cycle}</td>
                <td style={styles.td}>{row.start}</td>
                <td style={styles.td}>{row.finish}</td>
                <td style={styles.td}>{row.creationDate}</td>
                <td style={styles.td}>{row.modificationDate}</td>
                <td style={styles.td}>
                  <span style={styles.actionIcon}>🔗</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={styles.addButton}>+</div>
      </div>
    </div>
  );
}
