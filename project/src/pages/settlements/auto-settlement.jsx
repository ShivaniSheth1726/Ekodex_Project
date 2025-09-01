import React from "react";

export default function AutoSettlement() {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >


      {/* Create Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
        <button
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            padding: "8px 18px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          + Create
        </button>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Dropdown */}
          <select
            style={{
              padding: "6px 10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          >
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
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "10px", fontWeight: "bold" }}>CONNECTOR</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>TIME</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>RUN TIME</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>DAY</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>STATUS</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>CREATED AT</th>
              <th style={{ padding: "10px", fontWeight: "bold" }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="7"
                style={{ padding: "15px", textAlign: "center", color: "#dc3545" }}
              >
                No record available!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
