import React from "react";

export default function MidPage() {
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
      gridTemplateColumns: "repeat(4, 1fr)",
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
    emptyMessage: {
      textAlign: "center",
      color: "#6c757d",
      fontSize: "14px",
      padding: "20px",
      borderTop: "1px dashed #eaeaea",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink}>MID</span>
        &nbsp;/&nbsp;Configuration&nbsp;/&nbsp;<strong>MID</strong>
      </div>

      {/* Card */}
      <div style={styles.card}>
        <div style={styles.cardTitle}>MID</div>

        {/* Floating Add Button */}
        <button style={styles.floatingButton}>+</button>

        {/* Form Grid */}
        <div style={styles.formGrid}>
          <div style={styles.formGroup}>
            <label style={styles.label}>ID:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Descriptor:</label>
            <input type="text" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Creation Date:</label>
            <input type="email" placeholder="Enter text..." style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Modification Date:</label>
            <input type="date" placeholder="Enter text..." style={styles.input} />
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
            <label style={styles.label}>Connector:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Acquire:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
        </div>

        {/* Search and Reset Buttons */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.searchButton }}>
            🔍 Search
          </button>
          <button style={{ ...styles.button, ...styles.resetButton }}>
            ✖ Reset
          </button>
        </div>

        {/* Empty Table Message */}
        <div style={styles.emptyMessage}>Nothing found.</div>
      </div>
    </div>
  );
}
