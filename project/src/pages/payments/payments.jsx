import React from "react";

export default function PaymentLinkPage() {
  const container = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumb = {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "5px",
  };

  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 0 20px 0",
  };

  const card = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    maxWidth: "100%",
  };

  const sectionTitle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const formRow = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  };

  const formGroup = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  const label = {
    fontSize: "14px",
    fontWeight: "500",
  };

  const select = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const input = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const generateBtn = {
    backgroundColor: "black",
    color: "white",
    padding: "12px 25px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "20px",
  };

  const linkBoxWrapper = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f1f3f5",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const linkBox = {
    flex: 1,
    padding: "12px",
    border: "none",
    backgroundColor: "#f1f3f5",
    fontSize: "14px",
    color: "#6c757d",
  };

  const copyBtn = {
    backgroundColor: "#495057",
    color: "white",
    border: "none",
    padding: "12px 15px",
    cursor: "pointer",
  };

  return (
    <div style={container}>
      {/* Breadcrumb */}
      <div style={breadcrumb}>Dashboard &gt; Payment Link</div>

      {/* Heading */}
      <h2 style={heading}>Payment Link</h2>

      {/* Card */}
      <div style={card}>
        <div style={sectionTitle}>Generate Payment Link</div>

        {/* Form Rows */}
        <div style={formRow}>
          <div style={formGroup}>
            <label style={label}>Select Merchant</label>
            <select style={select}>
              <option>-- Select Merchant --</option>
            </select>
          </div>

          <div style={formGroup}>
            <label style={label}>Terminal/Profile</label>
            <select style={select}>
              <option>-- Select Terminal/Profile --</option>
            </select>
          </div>
        </div>

        <div style={formRow}>
          <div style={formGroup}>
            <label style={label}>Currency</label>
            <select style={select}>
              <option>-- Select Currency --</option>
            </select>
          </div>

          <div style={formGroup}>
            <label style={label}>Amount</label>
            <input type="number" placeholder="Enter amount" style={input} />
          </div>
        </div>

        {/* Generate Button */}
        <button style={generateBtn}>Generate Link</button>

        {/* Direct Link */}
        <div style={formGroup}>
          <label style={label}>Direct Link</label>
          <div style={linkBoxWrapper}>
            <input
              type="text"
              value=""
              placeholder="Generated link will appear here"
              style={linkBox}
              readOnly
            />
            <button style={copyBtn}>📋</button>
          </div>
        </div>
      </div>
    </div>
  );
}
