import React from "react";

export default function AgreementPage() {
  const agreements = [
    { id: 1, name: "RP agreement", type: "RP Onboarding" },
    { id: 2, name: "Admin to", type: "Merchant To TheBooker" },
    { id: 3, name: "Agreement", type: "Merchant Onboarding" },
    { id: 4, name: "Test", type: "PSP Onbording" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      

      {/* Heading and Create Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
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
          + Create Business
        </button>
      </div>

      {/* Table */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f9fafb" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>NAME</th>
              <th style={thStyle}>TYPE</th>
              <th style={thStyle}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((item) => (
              <tr key={item.id} style={{ borderTop: "1px solid #e5e7eb" }}>
                <td style={tdStyle}>{item.id}</td>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.type}</td>
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

// Inline CSS objects
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
