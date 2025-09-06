import React, { useState } from "react";

export default function Announcements() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const announcementsData = [
    {
      id: "e44bc338-7f4e-11f0-9295-8eee978b93a8",
      publishDate: "2025-08-22 14:55:00",
      title: "Reminder about day off on Monday the 25th",
      text: `Dear Partners,

Please be informed that on Monday the 25th our team will have a day off due to the Independence day. 
Our Help center is available for any critical questions.

Other questions will be checked on Tuesday.
Thank you for cooperation.

Best regards`,
    },
    {
      id: "8fb900aa-7cd4-11f0-90b4-c695eac8a7bb",
      publishDate: "2025-08-19 11:12:00",
      title: "Day off on Monday 25.08",
      text: `Dear Partners,

Please be informed that on Monday the 25th our team will have a day off due to the Independence day. 
Our Help center is available for any critical questions.

Other questions will be checked on Tuesday.
Thank you for cooperation.

Best regards`,
    },
  ];

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
      padding: "20px",
    },
    breadcrumb: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "15px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      padding: "20px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    formGroup: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
    },
    input: {
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      fontSize: "14px",
      width: "250px",
    },
    searchButton: {
      backgroundColor: "#4e73df",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    resetButton: {
      backgroundColor: "#f8f9fa",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      color: "#6c757d",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableHeader: {
      backgroundColor: "#f9fafb",
      textAlign: "left",
      padding: "12px 8px",
      fontSize: "14px",
      color: "#6c757d",
      borderBottom: "1px solid #eaeaea",
    },
    tableCell: {
      padding: "12px 8px",
      fontSize: "14px",
      color: "#212529",
      borderBottom: "1px solid #eaeaea",
      verticalAlign: "top",
      whiteSpace: "pre-wrap",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>Supports &gt; Announcements</div>

      {/* Card */}
      <div style={styles.card}>
        {/* Section Title */}
        <div style={styles.sectionTitle}>Announcements</div>

        {/* Filters */}
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Enter text..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={styles.input}
          />
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            style={styles.input}
          />
          <div style={styles.buttonGroup}>
            <button style={styles.searchButton}>🔍 Search</button>
            <button style={styles.resetButton}>Reset</button>
          </div>
        </div>

        {/* Table */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>ID</th>
              <th style={styles.tableHeader}>Publish Date</th>
              <th style={styles.tableHeader}>Title</th>
              <th style={styles.tableHeader}>Text</th>
            </tr>
          </thead>
          <tbody>
            {announcementsData.map((item, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{item.id}</td>
                <td style={styles.tableCell}>{item.publishDate}</td>
                <td style={styles.tableCell}>{item.title}</td>
                <td style={styles.tableCell}>{item.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
