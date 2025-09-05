import React, { useState } from "react";

export default function CustomerList() {
  const [formData, setFormData] = useState({
    merchant: "",
    sku: "",
    name: "",
    description: "",
    price: "",
    currency: "",
    creationDate: "",
    modificationDate: "",
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
    marginBottom: "10px",
  };

  const addButtonStyle = {
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    width: "35px",
    height: "35px",
    fontSize: "20px",
    cursor: "pointer",
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
        <span style={breadcrumbBold}>Customer List</span> &nbsp; Customer Invoice
        &nbsp; › &nbsp; Customer List
      </div>

      {/* Top Add Button */}
      <div style={topButtonsStyle}>
        <button style={addButtonStyle}>+</button>
      </div>

      {/* Card */}
      <div style={cardStyle}>
        <div style={titleStyle}>Customer List</div>

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
            <label style={labelStyle}>Customer Name :</label>
            <select
              style={selectStyle}
              value={formData.customer}
              onChange={(e) =>
                setFormData({ ...formData, customer: e.target.value })
              }
            >
              <option value="">Select customer</option>
              <option value="ShopA">Shop A</option>
              <option value="ShopB">Shop B</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Phone:</label>
            <input
              type="number"
              style={inputStyle}
              value={formData.sku}
              onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
            />
          </div>
          <div>
            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              style={inputStyle}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Country:</label>
            <input
              type="text"
              style={inputStyle}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>zip:</label>
            <input
              type="number"
              style={inputStyle}
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
          
          <div>
            <label style={labelStyle}>Creation Date:</label>
            <input
              type="date"
              style={inputStyle}
              value={formData.creationDate}
              onChange={(e) =>
                setFormData({ ...formData, creationDate: e.target.value })
              }
            />
          </div>
          <div>
            <label style={labelStyle}>Modification Date:</label>
            <input
              type="date"
              style={inputStyle}
              value={formData.modificationDate}
              onChange={(e) =>
                setFormData({ ...formData, modificationDate: e.target.value })
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
