// AdminDashboard.jsx
import React from "react";
import {
  FaUserPlus,
  FaUsers,
  FaClipboardCheck,
  FaFileInvoiceDollar,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <div style={styles.cardsContainer}>
        {/* Student Registration */}
        <Link to="/studentregistration" style={styles.cardLink}>
          <div style={styles.card}>
            <FaUserPlus size={50} color="#3498db" />
            <h3 style={styles.cardTitle}>Student Registration</h3>
            <p style={styles.cardText}>Register new students to the system.</p>
          </div>
        </Link>

        {/* Manage Student Profile */}
        <Link to="/managestudentprofile" style={styles.cardLink}>
          <div style={styles.card}>
            <FaUsers size={50} color="#2ecc71" />
            <h3 style={styles.cardTitle}>Manage Student Profile</h3>
            <p style={styles.cardText}>
              View, edit, or delete student profiles.
            </p>
          </div>
        </Link>

        {/* View/Edit/Delete Attendance */}
        <Link to="/attendancemanagement" style={styles.cardLink}>
          <div style={styles.card}>
            <FaClipboardCheck size={50} color="#e67e22" />
            <h3 style={styles.cardTitle}>Manage Attendance</h3>
            <p style={styles.cardText}>
              View, edit, or delete attendance records.
            </p>
          </div>
        </Link>

        {/* Generate Payment */}
        <Link to="/paymentgeneration" style={styles.cardLink}>
          <div style={styles.card}>
            <FaFileInvoiceDollar size={50} color="#e74c3c" />
            <h3 style={styles.cardTitle}>Generate Payment</h3>
            <p style={styles.cardText}>Generate and manage student payments.</p>
          </div>
        </Link>

        {/* Approve/Reject Mess Cut Request */}
        <Link to="/messcutapproval" style={styles.cardLink}>
          <div style={styles.card}>
            <FaCheckCircle size={50} color="#9b59b6" />
            <h3 style={styles.cardTitle}>Mess Cut Requests</h3>
            <p style={styles.cardText}>Approve or reject mess cut requests.</p>
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
