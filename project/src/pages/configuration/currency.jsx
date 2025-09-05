import React from "react";

export default function CurrencyRates() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fc",
      padding: "20px",
      minHeight: "100vh",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "20px",
    },
    tabs: {
      display: "flex",
      borderBottom: "1px solid #e9ecef",
      marginBottom: "20px",
    },
    tab: (active) => ({
      padding: "10px 20px",
      cursor: "pointer",
      fontWeight: "500",
      color: active ? "#007bff" : "#6c757d",
      borderBottom: active ? "2px solid #007bff" : "2px solid transparent",
    }),
    filterContainer: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
      alignItems: "center",
    },
    select: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      width: "200px",
    },
    dateInput: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    searchButton: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    resetButton: {
      backgroundColor: "#e9ecef",
      color: "#495057",
      marginLeft: "10px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      textAlign: "left",
      padding: "12px",
      backgroundColor: "#f1f3f5",
      fontSize: "14px",
      fontWeight: "600",
      borderBottom: "1px solid #dee2e6",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #dee2e6",
      fontSize: "14px",
    },
    actionIcon: {
      cursor: "pointer",
      color: "#adb5bd",
      fontSize: "16px",
    },
  };

  const data = [
    { code: "DZD", name: "Algerian Dinar", rate: 129.58365, date: "2025-09-03 00:00:00" },
    { code: "ARS", name: "Argentine Peso", rate: 1359.47719, date: "2025-09-03 06:00:00" },
    { code: "AMD", name: "Armenian Dram", rate: 393.80133, date: "2025-03-31 00:00:00" },
    { code: "AWG", name: "Aruban Florin", rate: 1.79, date: "2025-09-03 06:00:00" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Page Header */}
        <div style={styles.header}>Currency rates</div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <div style={styles.tab(true)}>Fiat</div>
          <div style={styles.tab(false)}>Crypto</div>
        </div>

        {/* Filter Section */}
        <div style={styles.filterContainer}>
          <div>
            <label style={{ fontSize: "14px", display: "block", marginBottom: "5px" }}>
              Currency:
            </label>
            <select style={styles.select}>
              <option value="">Select Currency</option>
              <option value="DZD">DZD</option>
              <option value="ARS">ARS</option>
              <option value="AMD">AMD</option>
              <option value="AWG">AWG</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: "14px", display: "block", marginBottom: "5px" }}>
              Rate Date:
            </label>
            <input type="date" style={styles.dateInput} />
          </div>

          <div>
            <button style={{ ...styles.button, ...styles.searchButton }}>Search</button>
            <button style={{ ...styles.button, ...styles.resetButton }}>Reset</button>
          </div>
        </div>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Currency code</th>
              <th style={styles.th}>Currency name</th>
              <th style={styles.th}>Rate</th>
              <th style={styles.th}>Rate Date</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={styles.td}>{row.code}</td>
                <td style={styles.td}>{row.name}</td>
                <td style={styles.td}>{row.rate}</td>
                <td style={styles.td}>{row.date}</td>
                <td style={styles.td}>
                  <span style={styles.actionIcon}>☆</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
