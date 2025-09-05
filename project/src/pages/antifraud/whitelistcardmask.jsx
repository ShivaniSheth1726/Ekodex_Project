import React, { useState } from "react";

export default function WhitelistCard() {
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    creationDate: "",
    modificationDate: "",
  });

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "10px",
  };

  const headerStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
  };

  const formRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginBottom: "20px",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "5px",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const selectStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const searchBtnStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const resetBtnStyle = {
    backgroundColor: "#f1f5f9",
    color: "#000",
    border: "1px solid #ccc",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #e2e8f0",
    fontSize: "14px",
    color: "#64748b",
  };

  const tdStyle = {
    padding: "12px",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "14px",
  };

  const actionBtnStyle = {
    cursor: "pointer",
    color: "#3b82f6",
  };

  const paginationStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15px",
    fontSize: "14px",
    color: "#64748b",
  };

  const pageControlsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const pageBtnStyle = {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const activePageBtnStyle = {
    ...pageBtnStyle,
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
  };

  return (
    <div style={containerStyle}>
      {/* Breadcrumbs */}
      <div style={breadcrumbStyle}>Anti-fraud &gt; Groups &gt; Whitelist Card</div>

      {/* Page Title */}
      <div style={headerStyle}>Whitelist Card</div>

      <div style={cardStyle}>
        {/* Filter Section */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>Card Number Mask:</label>
            <input
              type="text"
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
              style={inputStyle}
              placeholder="Enter text..."
            />
          </div>
          <div>
            <label style={labelStyle}>Merchant:</label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              style={selectStyle}
            >
              <option value="">Select</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
                  </div>
                    <div>
            <label style={labelStyle}>Whitelist Group:</label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              style={selectStyle}
            >
              <option value="">Select</option>
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
                  </div>
           
          <div>
            <label style={labelStyle}>Creation Date:</label>
            <input
              type="date"
              value={filters.creationDate}
              onChange={(e) =>
                setFilters({ ...filters, creationDate: e.target.value })
              }
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Modification Date:</label>
            <input
              type="date"
              value={filters.modificationDate}
              onChange={(e) =>
                setFilters({ ...filters, modificationDate: e.target.value })
              }
              style={inputStyle}
            />
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonGroupStyle}>
          <button style={searchBtnStyle}>🔍 Search</button>
          <button style={resetBtnStyle}>✖ Reset</button>
        </div>

       
      </div>
    </div>
  );
}
