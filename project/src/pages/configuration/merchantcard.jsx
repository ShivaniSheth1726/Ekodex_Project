import React from "react";

export default function MerchantCardDetails() {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fc",
      minHeight: "100vh",
      padding: "20px",
    },
    breadcrumb: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "15px",
    },
    breadcrumbLink: {
      color: "#007bff",
      textDecoration: "none",
      marginRight: "5px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      padding: "20px",
      position: "relative",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "20px",
      borderBottom: "1px solid #eaeaea",
      paddingBottom: "10px",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginBottom: "20px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "14px",
      marginBottom: "6px",
      color: "#495057",
    },
    input: {
      padding: "8px 10px",
      borderRadius: "6px",
      border: "1px solid #ced4da",
      fontSize: "14px",
    },
    select: {
      padding: "8px 10px",
      borderRadius: "6px",
      border: "1px solid #ced4da",
      fontSize: "14px",
      backgroundColor: "#fff",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: "500",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    },
    searchButton: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    resetButton: {
      backgroundColor: "#f8f9fa",
      border: "1px solid #ced4da",
      color: "#495057",
    },
    floatingButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#007bff",
      color: "#fff",
      fontSize: "24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      cursor: "pointer",
      border: "none",
    },
    tableContainer: {
      width: "100%",
      borderTop: "1px solid #eaeaea",
      marginTop: "10px",
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "10px",
    },
    th: {
      textAlign: "left",
      padding: "12px",
      fontSize: "14px",
      color: "#6c757d",
      borderBottom: "1px solid #eaeaea",
    },
    td: {
      padding: "12px",
      fontSize: "14px",
      borderBottom: "1px solid #f1f1f1",
      verticalAlign: "top",
    },
    statusEnabled: {
      backgroundColor: "#20c997",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "500",
      display: "inline-block",
    },
    showAll: {
      color: "#007bff",
      fontSize: "12px",
      cursor: "pointer",
      marginTop: "5px",
      display: "inline-block",
    },
    actionIcon: {
      fontSize: "16px",
      color: "#6c757d",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink}>Merchant Card Details</span>
        &nbsp;/&nbsp;Configuration&nbsp;/&nbsp;
        <strong>Merchant Card Details</strong>
      </div>

      {/* Card */}
      <div style={styles.card}>
        <div style={styles.cardTitle}>Merchant Card Details</div>

        {/* Floating Add Button */}
        <button style={styles.floatingButton}>+</button>

        {/* Filter Form */}
        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Status:</label>
            <select style={styles.select}>
              <option>Select...</option>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Country:</label>
            <select style={styles.select}>
              <option>Select...</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.searchButton }}>🔍 Search</button>
          <button style={{ ...styles.button, ...styles.resetButton }}>✖ Reset</button>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Countries</th>
                <th style={styles.th}>Creation Date</th>
                <th style={styles.th}>Modification Date</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Onboarding</td>
                <td style={styles.td}>
                  <span style={styles.statusEnabled}>Enabled</span>
                </td>
                <td style={styles.td}>(1): Other country</td>
                <td style={styles.td}>2024-08-11 21:18:25</td>
                <td style={styles.td}>2024-10-08 08:48:39</td>
                <td style={styles.td}>
                  <span style={styles.actionIcon}>🔗</span>
                </td>
              </tr>
              <tr>
                <td style={styles.td}>E-com merch</td>
                <td style={styles.td}>
                  <span style={styles.statusEnabled}>Enabled</span>
                </td>
                <td style={styles.td}>
                  (170): Afghanistan Albania Algeria ... 
                  <div style={styles.showAll}>Show all</div>
                </td>
                <td style={styles.td}>2024-07-29 15:59:08</td>
                <td style={styles.td}></td>
                <td style={styles.td}>
                  <span style={styles.actionIcon}>🔗</span>
                </td>
              </tr>
              <tr>
                <td style={styles.td}>Mexico</td>
                <td style={styles.td}>
                  <span style={styles.statusEnabled}>Enabled</span>
                </td>
                <td style={styles.td}>(1): Mexico</td>
                <td style={styles.td}>2024-05-23 21:55:29</td>
                <td style={styles.td}></td>
                <td style={styles.td}>
                  <span style={styles.actionIcon}>🔗</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
