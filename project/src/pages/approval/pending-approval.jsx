import React from "react";

export default function PendingForApproval() {
  const cards = [
    { title: "Merchant Application", count: 0 },
    { title: "PSP Application", count: 0 },
    { title: "RP Application", count: 0 },
    { title: "Merchant Gateway Request", count: 0 },
    { title: "Transaction Request", count: 0 },
    { title: "RP Payout Request", count: 0 },
    { title: "Merchant Payout Request", count: 0 },
  ];

  const containerStyle = {
    padding: "30px",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const breadcrumbStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "8px",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 12px rgba(0,0,0,0.15)",
  };

  const titleTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#374151",
  };

  const countStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111827",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
    

      {/* Cards */}
      <div style={gridStyle}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <p style={titleTextStyle}>{card.title}</p>
            <p style={countStyle}>{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
