import React from "react";

export default function SettlementCalculator() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const formRowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "20px",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={breadcrumbStyle}>Dashboard &gt; Settlement Calculator</div>
      <div style={cardStyle}>
        <div style={titleStyle}>Settlement Calculator V2</div>

        <form>
          <div style={formRowStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Select Connector</label>
              <select style={inputStyle}>
                <option>Select Connector</option>
              </select>
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Connector Account</label>
              <select style={inputStyle}>
                <option>-- Select Connector Account --</option>
              </select>
            </div>
          </div>

          <div style={formRowStyle}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Start Date</label>
              <input type="date" style={inputStyle} />
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>End Date</label>
              <input type="date" style={inputStyle} />
            </div>
          </div>

         

          <button type="submit" style={buttonStyle}>
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
}
