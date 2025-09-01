import { useState } from "react";
import { Trash2, Download, Filter, MoreVertical } from "lucide-react";

export default function ReferralPartnerPage() {
  const [pageSize, setPageSize] = useState(10);

  const partners = [
    {
      id: 1,
      referralCode: "55UFBA06QNC",
      name: "Mike stam",
      email: "mike@gmail.com",
      stage: "Onboarded",
      status: true,
      verified: true,
      createdAt: "2025-08-16 11:41:31",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#f9fafb", padding: "24px" }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
        Dashboard &nbsp; &gt; &nbsp; User Management &nbsp; &gt; &nbsp;{" "}
        <span style={{ color: "black", fontWeight: 500 }}>Referral Partner</span>
      </div>

      {/* Title + Create Button */}
      <div
        style={{
          display: "flex",
           justifyContent: "flex-end", // ✅ aligns button to right
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
      
        <button
          style={{
            background: "black",
            color: "white",
            padding: "8px 16px",
            borderRadius: "9999px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            border: "none",
          }}
        >
          + Create Referral Partner
        </button>
      </div>

      {/* Table Card */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "16px",
        }}
      >
        {/* Top Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
            alignItems: "center",
          }}
        >
          {/* Dropdown */}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "14px",
              outline: "none",
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#dc2626",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
                fontSize: "14px",
              }}
            >
              <Trash2 size={16} /> Delete All
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "black",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
                fontSize: "14px",
              }}
            >
              <Download size={16} /> Export Excel
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "black",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
                fontSize: "14px",
              }}
            >
              <Filter size={16} /> Advance Filter
            </button>
            <button
              style={{
                background: "#dc2626",
                color: "white",
                padding: "6px 14px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
                fontSize: "14px",
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ background: "#f9fafb", color: "#374151" }}>
                <th style={{ padding: "10px" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ padding: "10px", fontWeight: "600" }}>REFERRAL CODE</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>NAME</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>EMAIL</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>STAGE</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>STATUS</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>IS VERIFIED</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>CREATED AT</th>
                <th style={{ padding: "10px", fontWeight: "600" }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((p) => (
                <tr
                  key={p.id}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                    color: "#374151",
                  }}
                >
                  <td style={{ padding: "10px" }}>
                    <input type="checkbox" />
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      background: "#eaff8f",
                      fontWeight: "600",
                    }}
                  >
                    {p.referralCode}
                  </td>
                  <td style={{ padding: "10px", color: "#2563eb", cursor: "pointer" }}>
                    {p.name}
                  </td>
                  <td style={{ padding: "10px" }}>{p.email}</td>
                  <td style={{ padding: "10px" }}>
                    <span
                      style={{
                        background: "black",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        fontSize: "12px",
                      }}
                    >
                      {p.stage}
                    </span>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <input type="checkbox" checked={p.status} readOnly />
                  </td>
                  <td style={{ padding: "10px", textAlign: "center" }}>
                    {p.verified ? "✅" : "❌"}
                  </td>
                  <td style={{ padding: "10px" }}>{p.createdAt}</td>
                  <td style={{ padding: "10px" }}>
                    <button
                      style={{
                        padding: "6px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                      }}
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
