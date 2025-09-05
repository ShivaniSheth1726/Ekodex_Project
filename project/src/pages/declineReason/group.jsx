import React from "react";

export default function GroupsPage() {
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

  // Scrollable table wrapper
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
        <div style={headerStyle}>Groups</div>

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
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Creation Date</th>
                <th style={thStyle}>Modification Date</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>b6a7b452-54b4-11ef-94a7-aa8d0203e051</td>
                <td style={tdStyle}>OOOP</td>
                <td style={tdStyle}>2024-08-07 12:01:00</td>
                <td style={tdStyle}>2024-08-07 12:01:00</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>959abba8-5412-11ef-b346-320ce5b7cd49</td>
                <td style={tdStyle}>PKINJI dsc</td>
                <td style={tdStyle}>2024-08-06 16:40:26</td>
                <td style={tdStyle}>2024-08-06 16:40:36</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>7c8306ba-4da2-11ef-8934-aa8d0203e051</td>
                <td style={tdStyle}>Errors</td>
                <td style={tdStyle}>2024-07-29 12:02:54</td>
                <td style={tdStyle}>2024-07-29 12:02:54</td>
                <td style={tdStyle}>✏️</td>
              </tr>
              <tr>
                <td style={tdStyle}>4c1724a0-6a14-11ee-ab8d-8edff31c7fa7</td>
                <td style={tdStyle}>MPGS Decline Group</td>
                <td style={tdStyle}>2023-10-13 22:03:10</td>
                <td style={tdStyle}>2024-07-29 12:01:48</td>
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
