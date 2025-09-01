import React, { useState } from "react";

export default function PayoutToMerchant() {
  const [formData, setFormData] = useState({
    merchant: "",
    bankAccount: "",
    bankName: "",
    ifsc: "",
    accountHolder: "",
    accountType: "Saving",
    paymentMode: "IMPS",
    amount: "",
    email: "",
    phone: "",
    remark: "",
    responseUrl: "",
    webhookUrl: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "30px" }}>
     
      {/* Card */}
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          maxWidth: "1000px"
        }}
      >
        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px"
          }}
        >
          {/* Left column */}
          <div>
            <label style={labelStyle}>Select Merchant *</label>
            <select
              name="merchant"
              value={formData.merchant}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select</option>
              <option value="merchant1">Merchant 1</option>
              <option value="merchant2">Merchant 2</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Bank Name *</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Enter bank name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Bank Account Number *</label>
            <input
              type="text"
              name="bankAccount"
              value={formData.bankAccount}
              onChange={handleChange}
              placeholder="Enter bank account number"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>IFSC Code *</label>
            <input
              type="text"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
              placeholder="Enter IFSC code"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Account Holder Name *</label>
            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              placeholder="Enter account holder name"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Account Type *</label>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="Saving">Saving</option>
              <option value="Current">Current</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Payment Mode *</label>
            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="IMPS">IMPS</option>
              <option value="NEFT">NEFT</option>
              <option value="RTGS">RTGS</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>Amount *</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Customer Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter customer email"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Customer Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter customer phone number"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Remark *</label>
            <input
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              placeholder="Enter remark"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Response Url *</label>
            <input
              type="text"
              name="responseUrl"
              value={formData.responseUrl}
              onChange={handleChange}
              placeholder="example.com/callback"
              style={inputStyle}
            />
          </div>

          <div style={{ gridColumn: "1 / span 2" }}>
            <label style={labelStyle}>Webhook Url *</label>
            <input
              type="text"
              name="webhookUrl"
              value={formData.webhookUrl}
              onChange={handleChange}
              placeholder="example.com/callback"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Buttons */}
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              background: "#111827",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Save
          </button>
          <button
            type="button"
            style={{
              background: "#dc2626",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer"
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

// Inline styles
const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: "500",
  fontSize: "14px",
  color: "#111827"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "14px"
};
