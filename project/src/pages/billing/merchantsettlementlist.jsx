import React, { useState } from "react";

export default function SettlementsList() {
  const [merchant, setMerchant] = useState("");
  const [accountingPeriod, setAccountingPeriod] = useState("2025-09-01 ~ 2025-09-03");

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f8f9fa",
      padding: "20px",
      minHeight: "100vh",
    },
    breadcrumb: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "15px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      padding: "20px",
    },
    tabContainer: {
      display: "flex",
      borderBottom: "1px solid #eaeaea",
      marginBottom: "20px",
    },
    tab: (active) => ({
      padding: "10px 20px",
      cursor: "pointer",
      borderBottom: active ? "3px solid #4e73df" : "3px solid transparent",
      color: active ? "#4e73df" : "#6c757d",
      fontWeight: active ? "bold" : "normal",
      fontSize: "14px",
    }),
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    formGroup: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "20px",
    },
    formLabel: {
      fontSize: "14px",
      marginBottom: "5px",
      display: "block",
    },
    select: {
      padding: "8px 12px",
      fontSize: "14px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      width: "200px",
    },
    dateInput: {
      padding: "8px 12px",
      fontSize: "14px",
      border: "1px solid #ddd",
      borderRadius: "6px",
      width: "250px",
    },
    refreshButton: {
      backgroundColor: "#f0f6ff",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "16px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    searchButton: {
      backgroundColor: "#4e73df",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    },
    resetButton: {
      backgroundColor: "#f8f9fa",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "14px",
      color: "#6c757d",
    },
    message: {
      marginTop: "30px",
      fontSize: "14px",
      color: "#6c757d",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        Billing &gt; Merchant &gt; Settlements List
      </div>

      {/* Card */}
      <div style={styles.card}>
        {/* Tabs */}
        <div style={styles.tabContainer}>
          <div style={styles.tab(true)}>Settled</div>
          <div style={styles.tab(false)}>Remaining balance</div>
        </div>

        {/* Section Title */}
        <div style={styles.sectionTitle}>Settlements List</div>

        {/* Form */}
        <div style={styles.formGroup}>
          {/* Merchant Dropdown */}
          <div>
            <label style={styles.formLabel}>Merchant:</label>
            <select
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
              style={styles.select}
            >
              <option value="">Select Merchant</option>
              <option value="merchant1">Merchant 1</option>
              <option value="merchant2">Merchant 2</option>
            </select>
          </div>

          {/* Accounting Period */}
          <div>
            <label style={styles.formLabel}>Accounting Period:</label>
            <input
              type="text"
              value={accountingPeriod}
              onChange={(e) => setAccountingPeriod(e.target.value)}
              style={styles.dateInput}
            />
          </div>

          {/* Refresh Button */}
          <div>
            <button style={styles.refreshButton}>🔄</button>
          </div>
        </div>

        {/* Search & Reset Buttons */}
        <div style={styles.buttonGroup}>
          <button style={styles.searchButton}>🔍 Search</button>
          <button style={styles.resetButton}>Reset</button>
        </div>

        {/* Result Message */}
        <div style={styles.message}>Nothing found.</div>
      </div>
    </div>
  );
}
