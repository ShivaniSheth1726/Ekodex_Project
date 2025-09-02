import React from "react";

export default function IndustriesPage() {
  const industries = [
    "Kratom",
    "Crowdfunding",
    "Firearms",
    "Education",
    "Pharma",
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      

      {/* Heading and Create Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          + Create Industry
        </button>
      </div>

      {/* Table Container */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ⚲ Advance Filter
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Reset
          </button>
        </div>

        {/* Table */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f9fafb" }}>
              <th style={thStyle}>NAME</th>
              <th style={thStyle}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {industries.map((item, index) => (
              <tr key={index} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={tdStyle}>{item}</td>
                <td style={tdStyle}>
                  <button style={editBtnStyle}>✎</button>
                  <button style={deleteBtnStyle}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Inline CSS
const thStyle = {
  padding: "12px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#374151",
};

const tdStyle = {
  padding: "12px",
  fontSize: "14px",
  color: "#111827",
};

const editBtnStyle = {
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "8px",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteBtnStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "8px",
  cursor: "pointer",
};
