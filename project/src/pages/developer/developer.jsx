import React from "react";

export default function SystemLogs() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const headerRowStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "20px",
  };

  const fileSizeBtnStyle = {
    backgroundColor: "#f0ad4e",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "default",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const clearBtnStyle = {
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const logBoxStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    border: "1px solid #eee",
    fontFamily: "monospace",
    fontSize: "14px",
    lineHeight: "1.6",
    whiteSpace: "pre-wrap",
    overflowY: "auto",
    maxHeight: "70vh",
  };

  const logs = `
[2025-08-16 10:31:17] production.INFO: Logs cleared by Super Admin
[2025-08-16 10:32:01] production.INFO: Transaction Abandoned = Count 0
[2025-08-16 10:32:01] production.INFO: Transaction Abandoned = No transaction
[2025-08-16 10:33:01] production.INFO: Transaction Abandoned = Count 0
[2025-08-16 10:33:01] production.INFO: Transaction Abandoned = No transaction
  `;

  return (
    <div style={containerStyle}>
      {/* Breadcrumb */}
      <div style={breadcrumbStyle}>Dashboard &gt; Developer &gt; System Logs</div>

      {/* Title */}
      <div style={titleStyle}>System Logs</div>

      {/* Buttons */}
      <div style={headerRowStyle}>
        <button style={fileSizeBtnStyle}>File Size :- 3.93 MB</button>
        <button style={clearBtnStyle}>Clear Logs</button>
      </div>

      {/* Logs Box */}
      <div style={logBoxStyle}>{logs}</div>
    </div>
  );
}
