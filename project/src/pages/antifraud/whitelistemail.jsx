import React, { useState } from "react";

export default function WhitelistEmailPage() {
  const [filters, setFilters] = useState({
    email: "",
    merchant: "",
    group: "",
    creationDate: "",
    modificationDate: "",
  });

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    padding: "20px",
  };

  const topBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#94a3b8",
  };

  const importBtnStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 14px",
    cursor: "pointer",
    fontSize: "14px",
    marginLeft: "10px",
  };

  const plusBtnStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 12px",
    fontSize: "18px",
    cursor: "pointer",
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

  const checkboxStyle = {
    marginRight: "10px",
  };

  const actionBtnStyle = {
    cursor: "pointer",
    color: "#3b82f6",
    marginRight: "8px",
  };

  const deleteBtnStyle = {
    cursor: "pointer",
    color: "#ef4444",
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
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div style={breadcrumbStyle}>Antifraud &gt; Lists &gt; Whitelist Email</div>
        <div>
          <button style={plusBtnStyle}>+</button>
          <button style={importBtnStyle}>Import</button>
        </div>
      </div>

      {/* Page Title */}
      <div style={headerStyle}>Whitelist Email</div>

      <div style={cardStyle}>
        {/* Filter Section */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              type="text"
              value={filters.email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
              style={inputStyle}
              placeholder="Enter text..."
            />
          </div>
          <div>
            <label style={labelStyle}>Merchant:</label>
            <select
              value={filters.merchant}
              onChange={(e) =>
                setFilters({ ...filters, merchant: e.target.value })
              }
              style={selectStyle}
            >
              <option value="">Select</option>
              <option value="All">All</option>
              <option value="Merchant1">Merchant 1</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Whitelist Group:</label>
            <select
              value={filters.group}
              onChange={(e) =>
                setFilters({ ...filters, group: e.target.value })
              }
              style={selectStyle}
            >
              <option value="">Select</option>
              <option value="whitelist email">whitelist email</option>
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
              <th style={thStyle}>
                <input type="checkbox" style={checkboxStyle} />
              </th>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Merchant</th>
              <th style={thStyle}>Whitelist Group</th>
              <th style={thStyle}>Creation Date</th>
              <th style={thStyle}>Modification Date</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <input type="checkbox" style={checkboxStyle} />
              </td>
              <td style={tdStyle}>92341lc4-54a5-11ef-8dd8-626f68f84bd6</td>
              <td style={tdStyle}>werdanconn@gmail.com</td>
              <td style={tdStyle}>All</td>
              <td style={tdStyle}>whitelist email</td>
              <td style={tdStyle}>2024-08-07 10:12:37</td>
              <td style={tdStyle}>2024-08-07 10:12:37</td>
              <td style={tdStyle}>
                <span style={actionBtnStyle}>✏️</span>
                <span style={deleteBtnStyle}>❌</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div style={paginationStyle}>
          <div>Showing 1 to 1 of 1 entries</div>
          <div style={pageControlsStyle}>
            <span>Display</span>
            <select style={selectStyle}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <button style={pageBtnStyle}>⏮</button>
            <button style={pageBtnStyle}>◀</button>
            <button style={activePageBtnStyle}>1</button>
            <button style={pageBtnStyle}>▶</button>
            <button style={pageBtnStyle}>⏭</button>
          </div>
        </div>
      </div>
    </div>
  );
}
