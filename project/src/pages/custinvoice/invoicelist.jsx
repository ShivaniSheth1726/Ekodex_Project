import React, { useState } from "react";

export default function InvoiceList() {
  const [formData, setFormData] = useState({
    merchant: "",
    invoiceId: "",
    invoiceNumber: "",
    invoiceDate: "",
    dueDate: "",
    customerName: "",
    customerEmail: "",
    currency: "",
    status: "",
    activeSchedule: "",
    invoiceType: "",
  });

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumbStyle = {
    fontSize: "13px",
    marginBottom: "15px",
    color: "#888",
  };

  const breadcrumbBold = {
    fontWeight: "600",
    color: "#000",
  };

  const topButtonsStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "10px",
  };

  const buttonTopStyle = {
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const formGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginBottom: "20px",
  };

  const labelStyle = {
    fontSize: "14px",
    marginBottom: "5px",
    fontWeight: "500",
    display: "block",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const selectStyle = {
    ...inputStyle,
  };

  const actionsStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  };

  const searchButton = {
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const resetButton = {
    backgroundColor: "#f8f8f8",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const emptyTextStyle = {
    fontSize: "14px",
    color: "#777",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      {/* Breadcrumb */}
      <div style={breadcrumbStyle}>
        <span style={breadcrumbBold}>Invoice List</span> &nbsp; Customer Invoices
        &nbsp; › &nbsp; Invoice List
      </div>

      {/* Top Buttons */}
      <div style={topButtonsStyle}>
        <button style={buttonTopStyle}>Customize</button>
        <button style={buttonTopStyle}>Create New</button>
      </div>

      {/* Card */}
      <div style={cardStyle}>
        <div style={titleStyle}>Invoice List</div>

        {/* Form Grid */}
        <div style={formGridStyle}>
          <div>
            <label style={labelStyle}>Merchant:</label>
            <select
              style={selectStyle}
              value={formData.merchant}
              onChange={(e) =>
                setFormData({ ...formData, merchant: e.target.value })
              }
            >
              <option value="">Select merchant</option>
              <option value="ShopA">Shop A</option>
              <option value="ShopB">Shop B</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Invoice ID:</label>
            <input
              type="text"
              style={inputStyle}
              value={formData.invoiceId}
              onChange={(e) =>
                setFormData({ ...formData, invoiceId: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Invoice number:</label>
            <input
              type="text"
              style={inputStyle}
              value={formData.invoiceNumber}
              onChange={(e) =>
                setFormData({ ...formData, invoiceNumber: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Invoice date:</label>
            <input
              type="date"
              style={inputStyle}
              value={formData.invoiceDate}
              onChange={(e) =>
                setFormData({ ...formData, invoiceDate: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Due date:</label>
            <input
              type="date"
              style={inputStyle}
              value={formData.dueDate}
              onChange={(e) =>
                setFormData({ ...formData, dueDate: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Customer name:</label>
            <input
              type="text"
              style={inputStyle}
              value={formData.customerName}
              onChange={(e) =>
                setFormData({ ...formData, customerName: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Customer email:</label>
            <input
              type="email"
              style={inputStyle}
              value={formData.customerEmail}
              onChange={(e) =>
                setFormData({ ...formData, customerEmail: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Currency:</label>
            <select
              style={selectStyle}
              value={formData.currency}
              onChange={(e) =>
                setFormData({ ...formData, currency: e.target.value })
              }
            >
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Status:</label>
            <select
              style={selectStyle}
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="">Select status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Active Schedule:</label>
            <input
              type="text"
              style={inputStyle}
              value={formData.activeSchedule}
              onChange={(e) =>
                setFormData({ ...formData, activeSchedule: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Invoice Type:</label>
            <input
              type="text"
              style={inputStyle}
              value={formData.invoiceType}
              onChange={(e) =>
                setFormData({ ...formData, invoiceType: e.target.value })
              }
            />
          </div>
        </div>

        {/* Actions */}
        <div style={actionsStyle}>
          <button style={searchButton}>🔍 Search</button>
          <button style={resetButton}>✖ Reset</button>
        </div>

        {/* Empty State */}
        <div style={emptyTextStyle}>Nothing found.</div>
      </div>
    </div>
  );
}
