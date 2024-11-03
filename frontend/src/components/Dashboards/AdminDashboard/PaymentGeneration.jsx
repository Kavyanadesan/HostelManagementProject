import React from "react";
import {
  FaFileInvoiceDollar, // Icon for Generate Payment
  FaRegMoneyBillAlt, // Icon for Manage Student Payment (alternative icon)
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <div style={styles.cardsContainer}>
        {/* Generate Payment */}
        <Link to="/paymentgenarate" style={styles.cardLink}>
          <div style={styles.card}>
            <FaFileInvoiceDollar size={50} color="#e74c3c" />
            <h3 style={styles.cardTitle}>Generate Payment</h3>
            <p style={styles.cardText}>Generate and manage student payments.</p>
          </div>
        </Link>

        {/* Manage Student Payment */}
        <Link to="/managestudentpayment" style={styles.cardLink}>
          <div style={styles.card}>
            <FaRegMoneyBillAlt size={50} color="#3498db" />
            <h3 style={styles.cardTitle}>Manage Student Payments</h3>
            <p style={styles.cardText}>
              View and manage payments for students.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

// Styles in JavaScript
const styles = {
  dashboardContainer: {
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
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "250px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  cardTitle: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  cardText: {
    fontSize: "1rem",
    color: "#7f8c8d",
  },
  cardLink: {
    textDecoration: "none", // Removes default link styling
  },
};

export default AdminDashboard;
