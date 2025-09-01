import React from "react";

export default function RollingReserve() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", background: "#f8f9fa", minHeight: "100vh" }}>
     
     

      {/* Top Card - Total Rolling Reserve */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <div
          style={{
            background: "#fff",
            padding: "15px 30px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
            minWidth: "200px",
          }}
        >
          <div style={{ color: "green", fontWeight: "500", marginBottom: "5px" }}>Total Rolling Reserve</div>
          <div style={{ fontSize: "22px", fontWeight: "bold" }}>0.00</div>
        </div>
      </div>

      {/* Table Card */}
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        {/* Top Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", flexWrap: "wrap" }}>
          {/* Dropdown */}
          <select style={{ padding: "6px 10px", borderRadius: "5px", border: "1px solid #ddd" }}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "6px 15px",
                cursor: "pointer",
              }}
            >
              ⬇ Export Excel
            </button>
            <button
              style={{
                background: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "6px 15px",
                cursor: "pointer",
              }}
            >
              🔍 Advance Filter
            </button>
            <button
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                padding: "6px 15px",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "10px", fontWeight: "bold" }}>MERCHANT NAME</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>RR AMOUNT</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>RR RELEASE DATE</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" style={{ padding: "15px", textAlign: "center", color: "#dc3545" }}>
                No record available!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
