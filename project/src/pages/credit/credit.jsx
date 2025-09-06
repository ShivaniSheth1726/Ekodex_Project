import React from "react";

export default function CreditBalance() {
  const containerStyle = {
    backgroundColor: "#f0f5fa",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const breadcrumbStyle = {
    marginBottom: "15px",
    color: "#6b7280",
    fontSize: "14px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    padding: "20px",
    maxWidth: "100%",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#111827",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#111827",
  };

  const selectStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
  };

  const hrStyle = {
    border: "none",
    borderTop: "1px solid #e5e7eb",
    margin: "20px 0",
  };

  const subHeaderStyle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "5px",
    color: "#111827",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#6b7280",
  };

  return (
    <div style={containerStyle}>
      {/* Breadcrumb */}
      <div style={breadcrumbStyle}>
        <strong style={{ color: "#111827" }}>Credit Balance</strong> &nbsp;•&nbsp; Credits &nbsp;•&nbsp; Credit Balance
      </div>

      {/* Card */}
      <div style={cardStyle}>
        {/* Title */}
        <div style={headerStyle}>Credit Balance</div>

        {/* Merchant Dropdown */}
        <div style={sectionStyle}>
          <label style={labelStyle}>Merchant</label>
          <select style={selectStyle}>
            <option value="">Select Merchant</option>
            <option value="1">Merchant 1</option>
            <option value="2">Merchant 2</option>
          </select>
        </div>

        <hr style={hrStyle} />

        {/* Credit Balance Info */}
        <div>
          <div style={subHeaderStyle}>Credit balance</div>
          <div style={descStyle}>Available balance for Credits</div>
        </div>
      </div>
    </div>
  );
}
