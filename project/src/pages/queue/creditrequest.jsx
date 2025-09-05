import React, { useState } from "react";

export default function ChargebackRequests() {
  const [filters, setFilters] = useState({
    id: "",
    user: "",
    publicId: "",
    creationDate: "",
    modificationDate: "",
    status: "",
  });

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "20px",
  };

  const headerStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
  };

  const formRowStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginBottom: "15px",
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
    marginTop: "10px",
    display: "flex",
    gap: "10px",
  };

  const searchBtnStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const resetBtnStyle = {
    backgroundColor: "#f1f5f9",
    color: "#000",
    border: "1px solid #ccc",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const exportBtnStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    float: "right",
    cursor: "pointer",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "10px", color: "#64748b" }}>
        Queues &gt; Credit Requests
      </div>
      <button style={exportBtnStyle}>Export</button>
      <div style={cardStyle}>
        <div style={headerStyle}>Credit Requests</div>

        {/* First Row */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>Public ID:</label>
            <input
              type="text"
              value={filters.publicId}
              onChange={(e) =>
                setFilters({ ...filters, publicId: e.target.value })
              }
              style={inputStyle}
              placeholder="Enter text..."
            />
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
          <div>
            <label style={labelStyle}>Status:</label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              style={selectStyle}
            >
              <option value="">Select</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonGroupStyle}>
          <button style={searchBtnStyle}>🔍 Search</button>
          <button style={resetBtnStyle}>✖ Reset</button>
        </div>

        {/* Empty Result */}
        <div style={{ marginTop: "20px", color: "#64748b" }}>
          Nothing found.
        </div>
      </div>
    </div>
  );
}
