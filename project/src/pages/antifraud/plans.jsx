import React, { useState } from "react";

export default function PlansPage() {
  const [filters, setFilters] = useState({
    name: "",
    appliance: "",
    description: "",
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
    marginRight: "10px",
    color: "#3b82f6",
  };

  return (
    <div style={containerStyle}>
      {/* Breadcrumbs */}
      <div style={breadcrumbStyle}>Plans &gt; Anti-fraud &gt; Plans</div>

      {/* Page Title */}
      <div style={headerStyle}>Plans</div>

      <div style={cardStyle}>
        {/* Filter Section */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>Name:</label>
            <input
              type="text"
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
              style={inputStyle}
              placeholder="Enter text..."
            />
          </div>
          <div>
            <label style={labelStyle}>Appliance:</label>
            <select
              value={filters.appliance}
              onChange={(e) =>
                setFilters({ ...filters, appliance: e.target.value })
              }
              style={selectStyle}
            >
              <option value="">Select</option>
              <option value="merchant">Merchant</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Description:</label>
            <input
              type="text"
              value={filters.description}
              onChange={(e) =>
                setFilters({ ...filters, description: e.target.value })
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
        </div>

        <div style={formRowStyle}>
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

        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Appliance</th>
              <th style={thStyle}>Creation Date</th>
              <th style={thStyle}>Modification Date</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                da14d156-46a6-11f0-8cfa-068aaa7dc38e
              </td>
              <td style={tdStyle}>Test Black</td>
              <td style={tdStyle}>merchant</td>
              <td style={tdStyle}>2025-06-11 09:31:28</td>
              <td style={tdStyle}>2025-06-11 09:31:28</td>
              <td style={tdStyle}>Sample description</td>
              <td style={tdStyle}>
                <span style={actionBtnStyle}>✏️</span>
                <span style={actionBtnStyle}>📋</span>
                <span style={actionBtnStyle}>🔄</span>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>
                d05d863e-f06c-11ef-a150-fec549b355e5
              </td>
              <td style={tdStyle}>newplan</td>
              <td style={tdStyle}>merchant</td>
              <td style={tdStyle}>2025-02-21 15:59:21</td>
              <td style={tdStyle}>2025-02-21 15:59:21</td>
              <td style={tdStyle}>Another description</td>
              <td style={tdStyle}>
                <span style={actionBtnStyle}>✏️</span>
                <span style={actionBtnStyle}>📋</span>
                <span style={actionBtnStyle}>🔄</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
