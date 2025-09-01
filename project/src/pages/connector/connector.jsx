import React, { useState } from "react";

export default function ConnectorTables() {
  const [activeConnector, setActiveConnector] = useState("UPI");

  const tabStyle = (isActive) => ({
    padding: "6px 14px",
    borderRadius: "20px",
    cursor: "pointer",
    border: "none",
    fontSize: "14px",
    fontWeight: "500",
    marginRight: "8px",
    backgroundColor: isActive ? "#4F8DF5" : "#E4E6EB",
    color: isActive ? "#fff" : "#000",
  });

  const tableWrapper = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const tableHead = {
    backgroundColor: "#f9fafb",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "14px",
    borderBottom: "1px solid #e5e7eb",
  };

  const btn = (bg, color = "#fff") => ({
    backgroundColor: bg,
    color,
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
  });

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* Tabs */}
      <div style={{ marginBottom: "12px" }}>
        <button
          onClick={() => setActiveConnector("UPI")}
          style={tabStyle(activeConnector === "UPI")}
        >
          UPI
        </button>
        <button
          onClick={() => setActiveConnector("Card")}
          style={tabStyle(activeConnector === "Card")}
        >
          Card
        </button>
      </div>

      {/* Tables */}
      <div style={tableWrapper}>
        {activeConnector === "UPI" && (
          <div>
            {/* Filter Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <select
                style={{
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <option>10</option>
                <option>20</option>
              </select>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={btn("#000")}>Advance Filter</button>
                <button style={btn("#dc2626")}>Reset</button>
                <button style={btn("#16a34a")}>+ Create Connector</button>
              </div>
            </div>

            {/* Table */}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ ...tableHead, padding: "8px" }}>ID</th>
                  <th style={{ ...tableHead, padding: "8px" }}>NAME</th>
                  <th style={{ ...tableHead, padding: "8px" }}>PSP</th>
                  <th style={{ ...tableHead, padding: "8px" }}>STATUS</th>
                  <th style={{ ...tableHead, padding: "8px" }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "8px" }}>1</td>
                  <td style={{ padding: "8px" }}>Sample UPI</td>
                  <td style={{ padding: "8px" }}>Google Pay</td>
                  <td style={{ padding: "8px", color: "green", fontWeight: "500" }}>Active</td>
                  <td style={{ padding: "8px", display: "flex", gap: "6px" }}>
                    <button style={btn("#3b82f6")}>✏️ Edit</button>
                    <button style={btn("#22c55e")}>✅ Active</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeConnector === "Card" && (
          <div>
            {/* Filter Row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <select
                style={{
                  padding: "6px 10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              >
                <option>10</option>
                <option>20</option>
              </select>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={btn("#000")}>Advance Filter</button>
                <button style={btn("#dc2626")}>Reset</button>
                <button style={btn("#16a34a")}>+ Create Connector</button>
              </div>
            </div>

            {/* Table */}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ ...tableHead, padding: "8px" }}>CONNECTOR</th>
                  <th style={{ ...tableHead, padding: "8px" }}>TIME</th>
                  <th style={{ ...tableHead, padding: "8px" }}>RUN TIME</th>
                  <th style={{ ...tableHead, padding: "8px" }}>DAY</th>
                  <th style={{ ...tableHead, padding: "8px" }}>STATUS</th>
                  <th style={{ ...tableHead, padding: "8px" }}>CREATED AT</th>
                  <th style={{ ...tableHead, padding: "8px" }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "8px" }}>Visa</td>
                  <td style={{ padding: "8px" }}>12:30 PM</td>
                  <td style={{ padding: "8px" }}>5 mins</td>
                  <td style={{ padding: "8px" }}>Monday</td>
                  <td style={{ padding: "8px", color: "green", fontWeight: "500" }}>Active</td>
                  <td style={{ padding: "8px" }}>2025-09-01</td>
                  <td style={{ padding: "8px", display: "flex", gap: "6px" }}>
                    <button style={btn("#3b82f6")}>✏️ Edit</button>
                                      <button style={btn("#22c55e")}>✅ Active</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
