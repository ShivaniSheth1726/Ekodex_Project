import { useState } from "react";
import { Filter, Download, MoreVertical } from "lucide-react";

export default function MerchantUsersPage() {
  const [pageSize, setPageSize] = useState(20);
  const [openRow, setOpenRow] = useState(null);

  const users = [
    {
      id: 1,
      name: "Kevin",
      mid: "M2508185423",
      email: "randomid869@gmail.com",
      unsettleBal: "₹ 1570222.18",
      todayNetPayin: "173326.77",
      availableBal: "₹ 0.00",
      payoutBal: "₹ 539490.59",
      payoutMid: "PayoutOriel / SKYPAL",
      status: true,
      createdAt: "2025-08-18 22:49:32",
    },
    {
      id: 2,
      name: "Diljit",
      mid: "M2508113663",
      email: "rockybhaiya785@gmail.com",
      unsettleBal: "₹ 0.00",
      todayNetPayin: "0.00",
      availableBal: "₹ 0.00",
      payoutBal: "₹ 0.00",
      payoutMid: "PayoutOriel / Logista",
      status: true,
      createdAt: "2025-08-11 17:50:43",
    },
    {
      id: 3,
      name: "Josh B",
      mid: "M2508079524",
      email: "joshb@techptm.com",
      unsettleBal: "₹ 0.00",
      todayNetPayin: "0.00",
      availableBal: "₹ 0.00",
      payoutBal: "₹ 500.00",
      payoutMid: "NA / NA",
      status: false,
      createdAt: "2025-08-07 17:49:45",
    },
  ];

  const actionItems = [
    "Edit",
    "Show",
    "Payout Connector",
    "Connector Accounts",
    "Modify RP Commission",
    "Modify Payout Fee",
    "Login",
    "Change Password",
    "Cascading",
    "Routing",
    "Delete",
    "Set Limits",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        // background: "#f3f4f6",
        padding: "5px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Title + Create Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px",
        }}
      >
        <button
          style={{
            background: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "9999px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          + Create Merchant User
        </button>
      </div>

      {/* Table Card */}
      <div
        style={{
          background: "white",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          borderRadius: "20px",
          padding: "24px",
          maxWidth: "95%",
          margin: "0 auto",
        }}
      >
        {/* Top Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          {/* Page size dropdown */}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              padding: "10px 14px",
              fontSize: "14px",
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>

          {/* Actions */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "black",
                color: "white",
                padding: "10px 18px",
                borderRadius: "9999px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              <Download size={16} /> Export Excel
            </button>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#374151",
                color: "white",
                padding: "10px 18px",
                borderRadius: "9999px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              <Filter size={16} /> Advance Filter
            </button>
            <button
              style={{
                background: "#dc2626",
                color: "white",
                padding: "10px 18px",
                borderRadius: "9999px",
                cursor: "pointer",
                fontWeight: "500",
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
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f9fafb",
                  color: "#374151",
                  textAlign: "left",
                }}
              >
                <th style={{ padding: "14px" }}>
                  <input type="checkbox" />
                </th>
                <th style={{ padding: "14px", fontWeight: "600" }}>NAME</th>
                <th style={{ padding: "14px", fontWeight: "600" }}>EMAIL</th>
                <th style={{ padding: "14px", fontWeight: "600" }}>
                  UNSETTLE BAL
                </th>
                <th style={{ padding: "14px", fontWeight: "600" }}>
                  TODAY NET PAYIN
                </th>
                <th style={{ padding: "14px", fontWeight: "600" }}>
                  AVAILABLE BAL
                </th>
                <th style={{ padding: "14px", fontWeight: "600" }}>
                  PAYOUT BAL
                </th>
                <th style={{ padding: "14px", fontWeight: "600" }}>PAYOUT MID</th>
                <th style={{ padding: "14px", fontWeight: "600" }}>STATUS</th>
                <th style={{ padding: "14px", fontWeight: "600" }}>
                  CREATED AT
                </th>
                <th style={{ padding: "14px", fontWeight: "600" }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                    color: "#374151",
                    position: "relative",
                  }}
                >
                  <td style={{ padding: "14px" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ padding: "14px" }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          color: "#2563eb",
                          fontWeight: "600",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                      >
                        {u.name}
                      </span>
                      <span style={{ fontSize: "12px", color: "#6b7280" }}>
                        {u.mid}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "14px" }}>{u.email}</td>
                  <td style={{ padding: "14px" }}>{u.unsettleBal}</td>
                  <td style={{ padding: "14px" }}>{u.todayNetPayin}</td>
                  <td style={{ padding: "14px" }}>{u.availableBal}</td>
                  <td style={{ padding: "14px" }}>{u.payoutBal}</td>
                  <td style={{ padding: "14px" }}>{u.payoutMid}</td>
                  <td style={{ padding: "14px" }}>
                    <label
                      style={{
                        position: "relative",
                        display: "inline-flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        defaultChecked={u.status}
                        style={{ display: "none" }}
                      />
                      <div
                        style={{
                          width: "46px",
                          height: "26px",
                          background: u.status ? "black" : "#e5e7eb",
                          borderRadius: "9999px",
                          position: "relative",
                          transition: "background 0.3s",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: "5px",
                            left: u.status ? "26px" : "5px",
                            width: "16px",
                            height: "16px",
                            background: "white",
                            borderRadius: "50%",
                            transition: "left 0.3s",
                          }}
                        />
                      </div>
                    </label>
                  </td>
                  <td style={{ padding: "14px" }}>{u.createdAt}</td>
                  <td style={{ padding: "14px", textAlign: "center" }}>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <button
                        onClick={() =>
                          setOpenRow(openRow === u.id ? null : u.id)
                        }
                        style={{
                          padding: "6px",
                          borderRadius: "50%",
                          cursor: "pointer",
                          background: "transparent",
                        }}
                      >
                        <MoreVertical size={18} />
                      </button>

                      {/* Dropdown */}
                      {openRow === u.id && (
                        <div
                          style={{
                            position: "absolute",
                            top: "110%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            marginTop: "6px",
                            background: "white",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                            minWidth: "190px",
                            zIndex: 10,
                          }}
                        >
                          {actionItems.map((item, i) => (
                            <div
                              key={i}
                              style={{
                                padding: "12px 16px",
                                cursor: "pointer",
                                borderBottom:
                                  i !== actionItems.length - 1
                                    ? "1px solid #f1f1f1"
                                    : "none",
                                textAlign: "center",
                                fontSize: "14px",
                              }}
                              onClick={() => {
                                alert(`${item} clicked for ${u.name}`);
                                setOpenRow(null);
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.background = "#f9fafb")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.background = "white")
                              }
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
