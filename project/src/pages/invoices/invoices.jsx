import React from "react";

export default function ExpensesPage() {
  const container = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "20px",
  };

  const breadcrumb = {
    fontSize: "14px",
    color: "#6c757d",
    marginBottom: "5px",
  };

  const headingRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };

  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    margin: 0,
  };

  const createBtn = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "25px",
    fontSize: "14px",
    cursor: "pointer",
  };

  const card = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
  };

  const topControls = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const selectBox = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const btnGroup = {
    display: "flex",
    gap: "10px",
  };

  const exportBtn = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const filterBtn = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const resetBtn = {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const th = {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #dee2e6",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const td = {
    textAlign: "center",
    padding: "12px",
    fontSize: "14px",
    color: "#6c757d",
  };

  return (
    <div style={container}>
      {/* Breadcrumb */}
      <div style={breadcrumb}>Dashboard &gt; Expenses</div>

      {/* Heading and Button */}
      <div style={headingRow}>
        <h2 style={heading}>Expenses</h2>
        <button style={createBtn}>+ Create Expense</button>
      </div>

      {/* Card */}
      <div style={card}>
        {/* Top Controls */}
        <div style={topControls}>
          <select style={selectBox}>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>

          <div style={btnGroup}>
            {/* <button style={exportBtn}>⬇ Export Excel</button> */}
            <button style={filterBtn}>⚲ Advance Filter</button>
            <button style={resetBtn}>Reset</button>
          </div>
        </div>

        {/* Table */}
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>EXPENSE DATE</th>
              <th style={th}>AMOUNT</th>
              <th style={th}>DESCRIPTION</th>
              <th style={th}>CREATED AT</th>
              <th style={th}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" style={td}>
                No record available!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
