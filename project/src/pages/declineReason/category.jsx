import React from "react";

export default function CategoriesPage() {
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

  // Scrollable table
  const tableWrapperStyle = {
    maxHeight: "250px",
    overflowY: "auto",
    border: "1px solid #eee",
    borderRadius: "6px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #eee",
    fontSize: "14px",
    color: "#666",
    background: "#fafafa",
    position: "sticky",
    top: 0,
    zIndex: 1,
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "14px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headerStyle}>Categories</div>

        {/* Filters */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>ID:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Reason Pattern:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
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
            <label style={labelStyle}>Type:</label>
            <select style={inputStyle}>
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Category:</label>
            <select style={inputStyle}>
              <option>Undefined</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonRowStyle}>
          <button style={searchBtnStyle}>🔍 Search</button>
          <button style={resetBtnStyle}>✖ Reset</button>
        </div>

        {/* Table */}
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Reason Pattern</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Creation Date</th>
                <th style={thStyle}>Modification Date</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>cfe8f302-ef7a-11ef-a522-da87da72727c</td>
                <td style={tdStyle}>processing</td>
                <td style={tdStyle}>1111</td>
                <td style={tdStyle}>soft</td>
                <td style={tdStyle}>2025-02-20 11:07:02</td>
                <td style={tdStyle}>2025-07-01 07:37:21</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>1b0f3ddc-b150-11ef-b709-4e744c66c123</td>
                <td style={tdStyle}>processing</td>
                <td style={tdStyle}>001 Insufficient funds</td>
                <td style={tdStyle}>hard</td>
                <td style={tdStyle}>2024-12-03 08:25:08</td>
                <td style={tdStyle}>2024-12-03 08:25:08</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>b0207274-5412-11ef-9b3d-320ce5b7cd49</td>
                <td style={tdStyle}>processing</td>
                <td style={tdStyle}>050 Do not honor</td>
                <td style={tdStyle}>soft</td>
                <td style={tdStyle}>2024-08-06 16:41:11</td>
                <td style={tdStyle}>2024-09-10 10:23:57</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>6c414306-4da2-11ef-b744-aa8d0230e051</td>
                <td style={tdStyle}>error</td>
                <td style={tdStyle}>Error</td>
                <td style={tdStyle}>soft</td>
                <td style={tdStyle}>2024-07-29 12:02:26</td>
                <td style={tdStyle}>2024-07-29 12:02:26</td>
                <td style={tdStyle}>✏️</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
          Showing 1 to 4 of 4 entries
        </div>
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "5px" }}>
          <span>Display</span>
          <select style={{ padding: "4px", borderRadius: "4px", border: "1px solid #ddd" }}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <button style={resetBtnStyle}>«</button>
          <button style={{ ...searchBtnStyle, backgroundColor: "#4a90e2" }}>1</button>
          <button style={resetBtnStyle}>»</button>
        </div>
      </div>
    </div>
  );
}
