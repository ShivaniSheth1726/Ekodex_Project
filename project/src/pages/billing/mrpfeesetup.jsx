import React, { useState } from "react";

export default function FeeSetup() {
  const [selectedMrp, setSelectedMrp] = useState("BestShop");

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const labelStyle = {
    fontSize: "14px",
    marginBottom: "8px",
    fontWeight: "500",
  };

  const selectStyle = {
    width: "250px",
    padding: "8px 12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "20px",
  };

  const sectionStyle = {
    borderTop: "1px solid #e5e5e5",
    padding: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const sectionTitleStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#555",
    marginBottom: "8px",
  };

  const emptyTextStyle = {
    fontSize: "14px",
    color: "#777",
  };

  const addButtonStyle = {
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    width: "30px",
    height: "30px",
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "13px", marginBottom: "15px", color: "#888" }}>
        <span style={{ fontWeight: "600", color: "#000" }}>Fee Setup</span> &nbsp; Billing &nbsp; › &nbsp; MRP &nbsp; › &nbsp; Fee Setup
      </div>

      {/* Card */}
      <div style={cardStyle}>
        <div style={titleStyle}>Fee Setup</div>

        {/* Dropdown */}
        <div>
          <div style={labelStyle}>Mrp</div>
          <select
            style={selectStyle}
            value={selectedMrp}
            onChange={(e) => setSelectedMrp(e.target.value)}
          >
            <option value="BestShop">BestShop</option>
            <option value="ShopMax">ShopMax</option>
          </select>
        </div>

        {/* Transaction-related Section */}
        <div style={sectionStyle}>
          <div>
            <div style={sectionTitleStyle}>Transaction-related</div>
            <div style={emptyTextStyle}>Nothing found.</div>
          </div>
          <button style={addButtonStyle}>+</button>
        </div>

        {/* Recurrent Section */}
        <div style={sectionStyle}>
          <div>
            <div style={sectionTitleStyle}>Recurrent</div>
            <div style={emptyTextStyle}>Nothing found.</div>
          </div>
          <button style={addButtonStyle}>+</button>
        </div>
      </div>
    </div>
  );
}
