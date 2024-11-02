import React from "react";

function Payment() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Payment</h1>
      <p style={styles.description}>
        Pay your hostel fees online using our secure payment system.
      </p>
      <button style={styles.paymentButton}>Make a Payment</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#2c3e50",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#7f8c8d",
    marginBottom: "20px",
  },
  paymentButton: {
    padding: "10px 20px",
    color: "#fff",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Payment;
