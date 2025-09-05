import React from "react";

export default function BusinessTypes() {
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
      maxWidth: "1400px",
      margin: "0 auto",
    },
    header: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "20px",
    },
    filterContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gap: "20px",
      marginBottom: "20px",
      alignItems: "center",
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      width: "100%",
    },
    label: {
      fontSize: "14px",
      display: "block",
      marginBottom: "5px",
    },
    dateInput: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      width: "100%",
    },
    buttonGroup: {
      marginTop: "10px",
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
      marginRight: "10px",
    },
    resetButton: {
      backgroundColor: "#e9ecef",
      color: "#495057",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
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
      verticalAlign: "middle",
    },
    actionIcon: {
      cursor: "pointer",
      color: "#007bff",
      fontSize: "16px",
      textDecoration: "none",
    },
    topRightButton: {
      position: "absolute",
      top: "20px",
      right: "30px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "24px",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    },
    relativeWrapper: {
      position: "relative",
    },
  };

  const data = [
    {
      id: "890a7b26-ffa3-11ef-b22d-612b611bbdf3",
      name: "Nazar Zimmerman",
      creationDate: "2025-03-13 08:16:59",
      modificationDate: "2025-03-13 08:16:59",
    },
    {
      id: "47d48fa0-ecb5-11ef-bcce-76129b3687f5",
      name: "test",
      creationDate: "2025-02-19 13:30:03",
      modificationDate: "2025-02-19 13:30:03",
    },
    {
      id: "b7b02c1c-ald3-11ef-89da-267df6bb30c0",
      name: "Miscellaneous and Specialty Retail Stores (5999)",
      creationDate: "2024-11-13 15:26:56",
      modificationDate: "2025-03-12 09:48:13",
    },
    {
      id: "88c37c94-ald3-11ef-b99f-b12a1c5ca6a1",
      name: "Miscellaneous Personal Services, Not Elsewhere Classified. (7299)",
      creationDate: "2024-11-13 15:25:37",
      modificationDate: "2024-11-13 15:28:44",
    },
    {
      id: "318ad3bc-ald3-11ef-ad3d-267df6bb30c0",
      name: "CBD Products",
      creationDate: "2024-11-13 15:23:11",
      modificationDate: "2024-06-23 09:35:11",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.relativeWrapper}>
        {/* Floating Button */}
        <button style={styles.topRightButton}>+</button>

        {/* Main Card */}
        <div style={styles.card}>
          {/* Header */}
          <div style={styles.header}>Business Types</div>

          {/* Filter Section */}
          <div style={styles.filterContainer}>
            <div>
              <label style={styles.label}>ID:</label>
              <input type="text" placeholder="Enter text..." style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Name:</label>
              <input type="text" placeholder="Enter text..." style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Creation Date:</label>
              <input type="date" style={styles.dateInput} />
            </div>
            <div>
              <label style={styles.label}>Modification Date:</label>
              <input type="date" style={styles.dateInput} />
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.buttonGroup}>
            <button style={{ ...styles.button, ...styles.searchButton }}>Search</button>
            <button style={{ ...styles.button, ...styles.resetButton }}>Reset</button>
          </div>

          {/* Table */}
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Creation Date</th>
                <th style={styles.th}>Modification Date</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.id}</td>
                  <td style={styles.td}>{row.name}</td>
                  <td style={styles.td}>{row.creationDate}</td>
                  <td style={styles.td}>{row.modificationDate}</td>
                  <td style={styles.td}>
                    <a style={styles.actionIcon} href="#">
                      &#128279;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
