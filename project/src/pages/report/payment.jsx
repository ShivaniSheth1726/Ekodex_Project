import React from "react";

export default function PaymentsPage() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    background: "#f9fbfd",
    minHeight: "100vh",
    padding: "20px",
  };

  const headerRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1f2d3d",
  };

  const exportBtnStyle = {
    padding: "8px 14px",
    background: "#4aa3ff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    position: "relative",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "40px",
    right: "0",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    zIndex: 10,
  };

  const dropdownItemStyle = {
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
    borderBottom: "1px solid #f0f0f0",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    padding: "20px",
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "6px",
    display: "block",
    color: "#5a5a5a",
  };

  const inputStyle = {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    width: "200px",
  };

  const selectStyle = {
    ...inputStyle,
    width: "220px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const applyButtonStyle = {
    ...buttonStyle,
    background: "#4aa3ff",
    color: "#fff",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    background: "#f0f0f0",
    color: "#333",
  };

  const tabStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  };

  const tabBtnStyle = (active) => ({
    padding: "6px 14px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: active ? "#e8f0ff" : "#fff",
    cursor: "pointer",
    fontSize: "14px",
  });

  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div style={containerStyle}>
      {/* Header row with title + export */}
      <div style={headerRowStyle}>
        <h2 style={headerStyle}>Payment Trend</h2>
        <div style={{ position: "relative" }}>
          <button
            style={exportBtnStyle}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Export ⌄
          </button>
          {showDropdown && (
            <div style={dropdownStyle}>
              <div style={dropdownItemStyle}>Export as CSV</div>
              <div style={dropdownItemStyle}>Export as Excel</div>
              <div style={{ ...dropdownItemStyle, borderBottom: "none" }}>
                Export as PDF
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={cardStyle}>
        {/* Filters */}
        <div style={rowStyle}>
          <div>
  <label style={labelStyle}>Date:</label>
  <input
    type="date"
    style={inputStyle}
    defaultValue="2025-08-28"
  />
</div>

          <div>
            <label style={labelStyle}>Merchant:</label>
            <select style={selectStyle}>
              <option value="">Select Merchant</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>MID:</label>
            <select style={selectStyle}>
              <option value="">Select MID</option>
            </select>
          </div>
          <button style={{ ...buttonStyle, background: "#e3f2ff" }}>⟳</button>
        </div>

        {/* Action Buttons */}
        <div style={rowStyle}>
          <button style={applyButtonStyle}>Apply</button>
          <button style={resetButtonStyle}>Reset</button>
        </div>

        {/* Metrics & Group */}
        <div style={rowStyle}>
          <div>
            <label style={labelStyle}>Metric:</label>
            <select style={selectStyle}>
              <option>Converted to USD</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Group by:</label>
            <select style={selectStyle}>
              <option>Merchant</option>
            </select>
          </div>
          <div>
            <button style={tabBtnStyle(true)}>📊</button>
            <button style={tabBtnStyle(false)}>📈</button>
            <button style={tabBtnStyle(false)}>📋</button>
          </div>
          <div>
            <select style={selectStyle}>
              <option>Top 5</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div style={tabStyle}>
          <button style={tabBtnStyle(false)}>Hour</button>
          <button style={tabBtnStyle(true)}>Day</button>
          <button style={tabBtnStyle(false)}>Week</button>
          <button style={tabBtnStyle(false)}>Month</button>
          <button style={tabBtnStyle(false)}>Year</button>
        </div>

        {/* Placeholder for chart / table */}
        <div
          style={{
            marginTop: "20px",
            borderTop: "1px solid #eee",
            padding: "40px",
            textAlign: "center",
            color: "#aaa",
          }}
        >
          No data available
        </div>
      </div>
    </div>
  );
}
