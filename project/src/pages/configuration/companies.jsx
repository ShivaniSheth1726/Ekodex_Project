import React from "react";

export default function Companies() {
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
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      marginBottom: "20px",
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
      marginBottom: "20px",
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
    tableContainer: {
      maxHeight: "300px", // Adjust height as needed
      overflowY: "auto",
      border: "1px solid #dee2e6",
      borderRadius: "4px",
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
      zIndex: 2,
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #dee2e6",
      fontSize: "14px",
      verticalAlign: "middle",
      backgroundColor: "#fff",
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
  };

  const data = [
    {
      id: "c0077828-78cb-11f0-0542-322d03b8fe10",
      name: "TECHBHARTI",
      description: "IT and ITES Services",
      siteUrl: "https://www.techbharti.co.in/",
      businessType: "Marketing/Advertising",
      countryName: "India",
      address: "1102 Technocity IT Park",
      email: "bac@gmail.com",
      contactPerson: "Ulhas",
      creationDate: "2025-08-14 08:50:38",
      modificationDate: "2025-08-14 08:50:38",
    },
    {
      id: "342f6430-5d5c-11f0-b5c4-0dfc29982f6c",
      name: "testing gmail",
      description: "",
      siteUrl: "",
      businessType: "",
      countryName: "",
      address: "",
      email: "",
      contactPerson: "",
      creationDate: "2025-07-10 07:19:23",
      modificationDate: "2025-07-10 07:19:23",
    },
    {
      id: "4ecc9088-0012-11f0-a1bf-da2def122c8d",
      name: "Worldcard Pay",
      description: "Payment Services Provider",
      siteUrl: "https://worldcardpay.com",
      businessType: "Retail",
      countryName: "Mauritius",
      address: "Mauritius",
      email: "rikesh.ballah@worldcardpay.com",
      contactPerson: "Rikesh Ballah",
      creationDate: "2025-03-13 13:51:34",
      modificationDate: "2025-03-13 13:51:34",
    },
    {
      id: "4ca5d9f8-0ec1-11ef-ab31-ba228bcb188c",
      name: "PrakharTestCompany",
      description: "Miscellaneous and Specialty Retail Stores (5999)",
      siteUrl: "",
      businessType: "",
      countryName: "United Arab Emirates (tho)",
      address: "",
      email: "",
      contactPerson: "",
      creationDate: "2025-02-19 12:59:05",
      modificationDate: "2025-02-19 12:59:05",
    },
    // Extra rows for demo scroll
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `ID-${i + 1}`,
      name: `Company ${i + 1}`,
      description: `Description ${i + 1}`,
      siteUrl: "",
      businessType: "Retail",
      countryName: "India",
      address: `Address ${i + 1}`,
      email: `email${i + 1}@test.com`,
      contactPerson: `Person ${i + 1}`,
      creationDate: "2025-08-14 08:50:38",
      modificationDate: "2025-08-14 08:50:38",
    })),
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Floating Add Button */}
        <button style={styles.topRightButton}>+</button>

        {/* Page Header */}
        <div style={styles.header}>Companies</div>

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
            <label style={styles.label}>Description:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Site URL:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Address:</label>
            <input type="text" placeholder="Enter text..." style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Email:</label>
            <input type="email" placeholder="Enter text..." style={styles.input} />
          </div>
          <div>
            <label style={styles.label}>Contact Person:</label>
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

        {/* Search & Reset Buttons */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.searchButton }}>Search</button>
          <button style={{ ...styles.button, ...styles.resetButton }}>Reset</button>
        </div>

        {/* Scrollable Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Site Url</th>
                <th style={styles.th}>Business Type</th>
                <th style={styles.th}>Country Name</th>
                <th style={styles.th}>Address</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Contact Person</th>
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
                  <td style={styles.td}>{row.description}</td>
                  <td style={styles.td}>
                    {row.siteUrl ? (
                      <a href={row.siteUrl} target="_blank" rel="noopener noreferrer">
                        {row.siteUrl}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td style={styles.td}>{row.businessType}</td>
                  <td style={styles.td}>{row.countryName}</td>
                  <td style={styles.td}>{row.address}</td>
                  <td style={styles.td}>{row.email}</td>
                  <td style={styles.td}>{row.contactPerson}</td>
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
