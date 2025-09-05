import React, { useState } from "react";

export default function MrpsPage() {
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
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "20px",
    },
    filterContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "20px",
      marginBottom: "20px",
    },
    input: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      width: "100%",
    },
    select: {
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      width: "100%",
      backgroundColor: "#fff",
    },
    label: {
      fontSize: "14px",
      display: "block",
      marginBottom: "5px",
    },
    buttonGroup: {
      marginTop: "10px",
      marginBottom: "20px",
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
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
    tableContainer: {
      border: "1px solid #dee2e6",
      borderRadius: "4px",
      overflowX: "auto",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      textAlign: "left",
      padding: "12px",
      backgroundColor: "#f1f3f5",
      fontSize: "14px",
      fontWeight: "600",
      borderBottom: "1px solid #dee2e6",
      position: "sticky",
      top: 0,
      zIndex: 1,
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #dee2e6",
      fontSize: "14px",
      backgroundColor: "#fff",
      verticalAlign: "middle",
    },
    badge: {
      backgroundColor: "#20c997",
      color: "#fff",
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "600",
      display: "inline-block",
    },
    actions: {
      display: "flex",
      gap: "10px",
      justifyContent: "center",
    },
    actionIcon: {
      cursor: "pointer",
      color: "#6c757d",
      fontSize: "16px",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      fontSize: "14px",
    },
    paginationButtons: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
    },
    pageButton: {
      border: "1px solid #dee2e6",
      borderRadius: "4px",
      background: "#fff",
      padding: "5px 10px",
      cursor: "pointer",
    },
    activePage: {
      backgroundColor: "#007bff",
      color: "#fff",
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
  };

  const data = [
    {
      id: "de54849c-afd4-11ef-9cc3-b64b2c83584",
      name: "BestShop",
      email: "",
      merchants: "{2:}",
      contactPerson: "",
      status: "Enabled",
      creationDate: "2025-02-20 21:51:41",
      modificationDate: "2025-06-23 09:35:11",
      description: "",
    },
    {
      id: "d9871228-194c-11ef-98f9-aeb8a77c7c42",
      name: "Reseller 1",
      email: "agents@magicpay.net",
      merchants: "{1:}",
      contactPerson: "Agent Name",
      status: "Enabled",
      creationDate: "2024-05-23 21:38:52",
      modificationDate: "2024-10-29 11:04:14",
      description: "",
    },
    {
      id: "158748de-194b-11ef-adf8-6274d51b4e03",
      name: "MRP Wix",
      email: "agents@magicpay.net",
      merchants: "{1:}",
      contactPerson: "",
      status: "Enabled",
      creationDate: "2024-05-23 21:26:14",
      modificationDate: "2024-05-23 21:26:14",
      description: "",
    },
    {
      id: "fc1d4428-194a-11ef-af94-f49b4382d105",
      name: "Wix Demo Merchant MRP",
      email: "wix@magicpay.net",
      merchants: "{1:}",
      contactPerson: "Carlos Damico",
      status: "Enabled",
      creationDate: "2024-05-23 21:25:31",
      modificationDate: "2024-05-23 21:25:31",
      description: "",
    },
    {
      id: "748d63cc-ca58-11ed-863d-5ac0356f1b91",
      name: "Test",
      email: "",
      merchants: "{7:}",
      contactPerson: "",
      status: "Enabled",
      creationDate: "2023-03-24 15:27:57",
      modificationDate: "2025-06-18 09:38:11",
      description: "",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Floating Add Button */}
        <button style={styles.topRightButton}>+</button>

        {/* Page Header */}
        <div style={styles.header}>MRPs</div>

        {/* Filters */}
        <div style={styles.filterContainer}>
          <div>
            <label style={styles.label}>Name:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Merchant:</label>
            <select style={styles.select}>
              <option>Select merchant</option>
              <option>Merchant 1</option>
              <option>Merchant 2</option>
            </select>
          </div>
          <div>
            <label style={styles.label}>Creation Date:</label>
            <input type="date" style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Modification Date:</label>
            <input type="date" style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Email:</label>
            <input type="email" placeholder="Enter text..." style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Status:</label>
            <select style={styles.select}>
              <option>Select status</option>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.searchButton }}>Search</button>
          <button style={{ ...styles.button, ...styles.resetButton }}>Reset</button>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>E-mail</th>
                <th style={styles.th}>Merchants</th>
                <th style={styles.th}>Contact person</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Creation Date</th>
                <th style={styles.th}>Modification Date</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.id}</td>
                  <td style={styles.td}>{row.name}</td>
                  <td style={styles.td}>{row.email || "-"}</td>
                  <td style={styles.td}>{row.merchants}</td>
                  <td style={styles.td}>{row.contactPerson || "-"}</td>
                  <td style={styles.td}>
                    <span style={styles.badge}>{row.status}</span>
                  </td>
                  <td style={styles.td}>{row.creationDate}</td>
                  <td style={styles.td}>{row.modificationDate}</td>
                  <td style={styles.td}>{row.description || "-"}</td>
                  <td style={styles.td}>
                    <div style={styles.actions}>
                      <span style={styles.actionIcon} title="Edit">&#9998;</span>
                              <span style={styles.actionIcon} title="View">&#128065;</span>
                              <span style={styles.actionIcon} title="Delete">&#10007;</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div style={styles.paginationContainer}>
          <span>
            Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
            {Math.min(currentPage * rowsPerPage, data.length)} of {data.length} entries
          </span>
          <div style={styles.paginationButtons}>
            <button
              style={styles.pageButton}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
            >
              &#171;
            </button>
            <button
              style={styles.pageButton}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &#8249;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                style={{
                  ...styles.pageButton,
                  ...(currentPage === i + 1 ? styles.activePage : {}),
                }}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              style={styles.pageButton}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &#8250;
            </button>
            <button
              style={styles.pageButton}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              &#187;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
