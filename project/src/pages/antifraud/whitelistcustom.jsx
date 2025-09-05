import React from "react";

export default function WhitelistCustom() {
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

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #eee",
    color: "#555",
    fontWeight: "600",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "14px",
    color: "#333",
  };

  const checkboxStyle = {
    width: "16px",
    height: "16px",
  };

  const footerStyle = {
    marginTop: "15px",
    fontSize: "13px",
    color: "#555",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const paginationStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const pageBtnStyle = {
    padding: "6px 10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#fff",
  };

  const activePageStyle = {
    ...pageBtnStyle,
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "1px solid #4a90e2",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>Whitelist Custom</div>

        {/* Form Filters */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>Email:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Card BIN:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Card Last digits:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Expiration Date:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Merchant:</label>
            <select style={inputStyle}>
              <option>All</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Whitelist Group:</label>
            <select style={inputStyle}>
              <option>Digitarium test 1</option>
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
        </div>

        {/* Buttons */}
        <div style={buttonRowStyle}>
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
              <th style={thStyle}>Attributes</th>
              <th style={thStyle}>Merchant</th>
              <th style={thStyle}>Whitelist Group</th>
              <th style={thStyle}>Creation Date ⬇</th>
              <th style={thStyle}>Modification Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                <input type="checkbox" style={checkboxStyle} />
              </td>
              <td style={tdStyle}>12c55a8c-c777-11ef-a911-7af9197ae66d</td>
              <td style={tdStyle}>Card BIN: 433033</td>
              <td style={tdStyle}>All</td>
              <td style={tdStyle}>Digitarium test 1</td>
              <td style={tdStyle}>2024-12-31 12:59:30</td>
              <td style={tdStyle}>2024-12-31 12:59:30</td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div style={footerStyle}>
          <div>Showing 1 to 1 of 1 entries</div>
          <div style={paginationStyle}>
            <button style={pageBtnStyle}>{"<<"}</button>
            <button style={pageBtnStyle}>{"<"}</button>
            <button style={activePageStyle}>1</button>
            <button style={pageBtnStyle}>{">"}</button>
            <button style={pageBtnStyle}>{">>"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
