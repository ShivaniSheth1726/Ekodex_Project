import React, { useState } from "react";

export default function CheckoutStyling() {
  const [headerColor, setHeaderColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [buttonColor, setButtonColor] = useState("#000000");

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fc",
      minHeight: "100vh",
      padding: "20px",
    },
    breadcrumb: {
      fontSize: "14px",
      color: "#6c757d",
      marginBottom: "15px",
    },
    breadcrumbLink: {
      color: "#007bff",
      textDecoration: "none",
      marginRight: "5px",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      padding: "20px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      marginBottom: "6px",
      color: "#495057",
    },
    select: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      fontSize: "14px",
    },
    colorPickerContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "15px",
    },
    colorInput: {
      flex: 1,
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      fontSize: "14px",
    },
    colorBox: (color) => ({
      width: "40px",
      height: "40px",
      backgroundColor: color,
      border: "1px solid #ced4da",
      borderRadius: "4px",
    }),
    plusButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      width: "32px",
      height: "32px",
      fontSize: "20px",
      cursor: "pointer",
    },
    previewContainer: {
      display: "flex",
      marginTop: "20px",
      border: "1px solid #eaeaea",
      borderRadius: "8px",
      overflow: "hidden",
    },
    leftPanel: {
      width: "250px",
      padding: "15px",
      borderRight: "1px solid #eaeaea",
    },
    rightPanel: {
      flex: 1,
      backgroundColor: "#f8f9fa",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    previewScreen: {
      width: "500px",
      height: "300px",
      backgroundColor: backgroundColor,
      borderRadius: "8px",
      padding: "20px",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    amount: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    orderDetails: {
      fontSize: "14px",
    },
    inputField: {
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      fontSize: "14px",
      width: "100%",
      marginBottom: "10px",
    },
    button: {
      backgroundColor: buttonColor,
      color: "#fff",
      padding: "8px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
    },
    actionButtons: {
      display: "flex",
      gap: "10px",
      marginTop: "15px",
    },
    applyButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
    },
    resetButton: {
      backgroundColor: "#fff",
      color: "#000",
      border: "1px solid #ced4da",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      {/* Breadcrumb */}
      <div style={styles.breadcrumb}>
        <span style={styles.breadcrumbLink}>Configuration</span> • Branding
      </div>

      {/* Main Card */}
      <div style={styles.card}>
        <div style={styles.title}>Checkout styling</div>

        {/* Merchant Dropdown */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Merchant</label>
          <select style={styles.select}>
            <option>Select Merchant</option>
            <option>Merchant 1</option>
            <option>Merchant 2</option>
          </select>
        </div>

        <div style={styles.previewContainer}>
          {/* Left Panel */}
          <div style={styles.leftPanel}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Icon</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="text"
                  style={styles.colorInput}
                  placeholder="Upload icon URL"
                />
                <button style={styles.plusButton}>+</button>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Header</label>
              <div style={styles.colorPickerContainer}>
                <input
                  type="text"
                  style={styles.colorInput}
                  value={headerColor}
                  onChange={(e) => setHeaderColor(e.target.value)}
                />
                <div style={styles.colorBox(headerColor)}></div>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Background</label>
              <div style={styles.colorPickerContainer}>
                <input
                  type="text"
                  style={styles.colorInput}
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                />
                <div style={styles.colorBox(backgroundColor)}></div>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Button</label>
              <div style={styles.colorPickerContainer}>
                <input
                  type="text"
                  style={styles.colorInput}
                  value={buttonColor}
                  onChange={(e) => setButtonColor(e.target.value)}
                />
                <div style={styles.colorBox(buttonColor)}></div>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Elements style</label>
              <select style={styles.select}>
                <option>Default</option>
                <option>Rounded</option>
                <option>Square</option>
              </select>
            </div>

            <div style={styles.actionButtons}>
              <button style={styles.applyButton}>Apply</button>
              <button style={styles.resetButton}>Reset</button>
            </div>
          </div>

          {/* Right Panel */}
          <div style={styles.rightPanel}>
            <div style={styles.previewScreen}>
              <div>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  <img
                    src="https://via.placeholder.com/80x30"
                    alt="logo"
                    style={{ backgroundColor: "#fff", borderRadius: "4px" }}
                  />
                </div>
                <div style={styles.amount}>150.45 USD</div>
                <div style={styles.orderDetails}>
                  Order: order-1234
                  <br />
                  Description: gift
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  style={styles.inputField}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    placeholder="MM / YY"
                    style={{ ...styles.inputField, flex: 1 }}
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    style={{ ...styles.inputField, flex: 1 }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  style={styles.inputField}
                />
                <button style={{ ...styles.button, width: "100%", marginTop: "10px" }}>
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
