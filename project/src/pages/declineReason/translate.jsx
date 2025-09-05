import React from "react";

export default function TranslationsPage() {
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

  // Table wrapper makes only the table scrollable
  const tableWrapperStyle = {
    maxHeight: "250px", // set scrollable height
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
    top: 0, // keep header fixed
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
        <div style={headerStyle}>Translations</div>

        {/* Form Filters */}
        <div style={formRowStyle}>
          <div>
            <label style={labelStyle}>ID:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
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
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Decline Group:</label>
            <select style={inputStyle}>
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Connector:</label>
            <select style={inputStyle}>
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Status:</label>
            <select style={inputStyle}>
              <option>Select...</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Search Regexp:</label>
            <input type="text" placeholder="Enter text..." style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Replace Regexp:</label>
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
        </div>

        {/* Buttons */}
        <div style={buttonRowStyle}>
          <button style={searchBtnStyle}>🔍 Search</button>
          <button style={resetBtnStyle}>✖ Reset</button>
        </div>

        {/* Scrollable Table */}
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Decline Group</th>
                <th style={thStyle}>Connector</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Search Regexp</th>
                <th style={thStyle}>Replace Regexp</th>
                <th style={thStyle}>Creation Date</th>
                <th style={thStyle}>Modification Date</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>55802bdc-4da2-11ef-a886-aa8d0230a051</td>
                <td style={tdStyle}>processing</td>
                <td style={tdStyle}>soft</td>
                <td style={tdStyle}>MPGS Decline Group</td>
                <td style={tdStyle}>AccessBankConnectorService</td>
                <td style={tdStyle}>active</td>
                <td style={tdStyle}>980</td>
                <td style={tdStyle}>not sufficient funds</td>
                <td style={tdStyle}>2024-07-29 12:01:48</td>
                <td style={tdStyle}>2024-07-29 12:01:48</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>abe02788-6a14-11ea-8174-8eb2eb897ac1</td>
                <td style={tdStyle}>processing</td>
                <td style={tdStyle}>soft</td>
                <td style={tdStyle}>MPGS Decline Group</td>
                <td style={tdStyle}>MpgsConnectorService</td>
                <td style={tdStyle}>active</td>
                <td style={tdStyle}>DECLINED AUTHENTICATION_FAILED</td>
                <td style={tdStyle}>
                  3D Secure authentication failed. Please check data and try again
                </td>
                <td style={tdStyle}>2023-10-13 22:05:51</td>
                <td style={tdStyle}>2023-10-13 22:05:51</td>
                <td style={tdStyle}>✏️</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
          Showing 1 to 2 of 2 entries
        </div>
      </div>
    </div>
  );
}
