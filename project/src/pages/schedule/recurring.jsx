import React from "react";

export default function RecurringSchedulesPage() {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fb",
    minHeight: "100vh",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const formRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    marginBottom: "6px",
    color: "#444",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  };

  const selectStyle = {
    width: "100%",
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fff",
  };

  const buttonRowStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const searchBtnStyle = {
    backgroundColor: "#4a90e2",
    border: "none",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const resetBtnStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    color: "#333",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const emptyStateStyle = {
    marginTop: "20px",
    fontSize: "15px",
    color: "#888",
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>Recurring Schedules</div>

        {/* Filters */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>ID:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Name:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Merchant:</label>
            <select style={selectStyle}>
              <option value="">Select Merchant</option>
              <option value="merchant1">Merchant 1</option>
              <option value="merchant2">Merchant 2</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Paused:</label>
            <select style={selectStyle}>
              <option value="">Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonRowStyle}>
          <button style={searchBtnStyle}>🔍 Search</button>
          <button style={resetBtnStyle}>✖ Reset</button>
        </div>

        {/* Empty state */}
        <div style={emptyStateStyle}>Nothing found.</div>
      </div>
    </div>
  );
}
