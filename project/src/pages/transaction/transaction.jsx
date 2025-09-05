import React, { useState } from "react";

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState("quick");
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState("2025-09-03 00:00 ~ 2025-09-04 00:00");

  const pageStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fb",
    minHeight: "100vh",
    padding: "20px",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const titleLeft = {
    display: "flex",
    flexDirection: "column",
  };

  const mainHeading = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const subHeading = {
    fontSize: "14px",
    color: "#888",
  };

  const exportBtn = {
    backgroundColor: "#4c8bf5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    cursor: "pointer",
    fontWeight: "500",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
  };

  const sectionHeading = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "15px",
  };

  const tabContainer = {
    display: "flex",
    borderBottom: "1px solid #ddd",
    marginBottom: "20px",
  };

  const tabStyle = (active) => ({
    padding: "10px 15px",
    cursor: "pointer",
    fontWeight: "500",
    borderBottom: active ? "2px solid #4c8bf5" : "2px solid transparent",
    color: active ? "#4c8bf5" : "#555",
  });

  const formRow = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minWidth: "250px",
  };

  const buttonRow = {
    display: "flex",
    gap: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
  };

  const searchBtn = {
    ...buttonStyle,
    backgroundColor: "#4c8bf5",
    color: "white",
  };

  const resetBtn = {
    ...buttonStyle,
    backgroundColor: "#f5f5f5",
    color: "#333",
    border: "1px solid #ddd",
  };

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={titleLeft}>
          <span style={mainHeading}>Transactions</span>
          {/* <span style={subHeading}>Transactions</span> */}
        </div>
        <button style={exportBtn}>Export ▼</button>
      </div>

      {/* Card */}
      <div style={cardStyle}>
        {/* <div style={sectionHeading}>Transactions</div> */}

        {/* Tabs */}
        <div style={tabContainer}>
          <div
            style={tabStyle(activeTab === "quick")}
            onClick={() => setActiveTab("quick")}
          >
            Quick Search
          </div>
          <div
            style={tabStyle(activeTab === "advanced")}
            onClick={() => setActiveTab("advanced")}
          >
            Advanced Search
          </div>
        </div>

        {/* Form */}
        <div style={formRow}>
          <div>
            <div style={labelStyle}>Simple Search:</div>
            <input
              type="text"
              placeholder="Enter text..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <div style={labelStyle}>Date and Time:</div>
            <input
              type="datetime-local"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={inputStyle}
            />
          </div>

        </div>

        {/* Buttons */}
        <div style={buttonRow}>
          <button style={searchBtn}>🔍 Search</button>
          <button
            style={resetBtn}
            onClick={() => {
              setSearchText("");
              setDateRange("");
            }}
          >
            ✖ Reset
          </button>
        </div>

        {/* Result */}
        <p style={{ marginTop: "30px", fontWeight: "500", color: "#333" }}>
          Nothing found.
        </p>
      </div>
    </div>
  );
}
