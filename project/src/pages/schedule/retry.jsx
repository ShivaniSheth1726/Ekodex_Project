import React from "react";

export default function RetrySchedules() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
  };

  const formRowStyle = {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
  };

  const inputStyle = {
    flex: "1",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  };

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
  };

  const searchBtn = {
    ...buttonStyle,
    backgroundColor: "#3b82f6",
    color: "#fff",
  };

  const resetBtn = {
    ...buttonStyle,
    backgroundColor: "#f1f5f9",
    color: "#000",
    marginLeft: "10px",
  };

  const messageStyle = {
    marginTop: "20px",
    color: "#6b7280",
    fontSize: "15px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Retry Schedules</h2>

      <div style={cardStyle}>
        <h3 style={headingStyle}>Retry Schedules</h3>

        {/* Filter Section */}
        <div style={formRowStyle}>
          <input style={inputStyle} placeholder="ID: Enter text..." />
          <select style={inputStyle}>
            <option>Merchant</option>
          </select>
          <input style={inputStyle} placeholder="Name: Enter text..." />
          <select style={inputStyle}>
            <option>Recurring Schedule</option>
          </select>
        </div>

        <div>
          <button style={searchBtn}>Search</button>
          <button style={resetBtn}>Reset</button>
        </div>

        {/* Empty Message */}
        <div style={messageStyle}>Nothing found.</div>
      </div>
    </div>
  );
}
