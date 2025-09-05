import React from "react";

export default function ProtocolMapping() {
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
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#2c3e50",
    },
    formRow: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "15px",
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
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      fontSize: "14px",
    },
    select: {
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      fontSize: "14px",
    },
    actionButtons: {
      display: "flex",
      gap: "10px",
    },
    searchButton: {
      backgroundColor: "#4daaff",
      color: "#fff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    resetButton: {
      backgroundColor: "#fff",
      color: "#000",
      padding: "8px 16px",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
    },
    resultContainer: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#6c757d",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span style={{ fontWeight: "600", color: "#000" }}>Protocol Mapping</span>{" "}
        • <span style={styles.breadcrumbLink}>Configuration</span> • Protocol Mapping
      </div>

      {/* Card */}
      <div style={styles.card}>
        <div style={styles.title}>Protocol Mapping</div>

        {/* Form */}
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label style={styles.label}>ID:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Merchant:</label>
            <select style={styles.select}>
              <option>Select Merchant</option>
              <option>Merchant 1</option>
              <option>Merchant 2</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Protocol:</label>
            <select style={styles.select}>
              <option>Select Protocol</option>
              <option>HTTP</option>
              <option>HTTPS</option>
              <option>FTP</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Status:</label>
            <select style={styles.select}>
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={styles.actionButtons}>
          <button style={styles.searchButton}>
            🔍 Search
          </button>
          <button style={styles.resetButton}>✖ Reset</button>
        </div>

        {/* Result */}
        <div style={styles.resultContainer}>Nothing found.</div>
      </div>
    </div>
  );
}
