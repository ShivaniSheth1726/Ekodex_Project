import React from "react";

export default function UnknownPage() {
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
  };

  const resetBtnStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    color: "#333",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const resultStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>Unknown</div>

        {/* Form Filters */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>ID:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Reason:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Connector:</label>
            <select style={inputStyle}>
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Creation Date:</label>
            <input type="date" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Modification Date:</label>
            <input type="date" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Count:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Type:</label>
            <select style={inputStyle}>
              <option>Select...</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonRowStyle}>
          <button style={searchBtnStyle}>🔍 Search</button>
          <button style={resetBtnStyle}>✖ Reset</button>
        </div>

        {/* Result */}
        <div style={resultStyle}>Nothing found.</div>
      </div>
    </div>
  );
}
