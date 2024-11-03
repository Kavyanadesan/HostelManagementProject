import React from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardCheck,
  FaUserGraduate,
  FaUserEdit,
  FaMoneyBillWave,
} from "react-icons/fa";

function StaffDashboard() {
  return (
    <div style={styles.dashboardContainer}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Staff Dashboard</h1>
        <nav style={styles.navbar}>
          <Link to="/staffdashboard" style={styles.navLink}>
            Home
          </Link>
          <Link to="/profile" style={styles.navLink}>
            Profile
          </Link>
          <Link to="/settings" style={styles.navLink}>
            Settings
          </Link>
        </nav>
      </header>

      {/* Dashboard Cards */}
      <div style={styles.cardsContainer}>
        <Link to="/markattendance" style={styles.card}>
          <FaClipboardCheck size={50} color="#3498db" />
          <h3 style={styles.cardTitle}>Mark Attendance</h3>
          <p style={styles.cardText}>Easily mark attendance for students.</p>
        </Link>

        <Link to="/manageattendance" style={styles.card}>
          <FaUserEdit size={50} color="#2ecc71" />
          <h3 style={styles.cardTitle}>Manage Attendance</h3>
          <p style={styles.cardText}>
            View, edit, or delete attendance records.
          </p>
        </Link>

        <Link to="/viewstudentprofile" style={styles.card}>
          <FaUserGraduate size={50} color="#e67e22" />
          <h3 style={styles.cardTitle}>View Student Profile</h3>
          <p style={styles.cardText}>Check and manage student profiles.</p>
        </Link>

        <Link to="/paymentstatus" style={styles.card}>
          <FaMoneyBillWave size={50} color="#e74c3c" />
          <h3 style={styles.cardTitle}>View Payment Status</h3>
          <p style={styles.cardText}>Check the payment status of students.</p>
        </Link>
      </div>
    </div>
  );
}

// Styles in JavaScript
const styles = {
  dashboardContainer: {
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#2c3e50",
    color: "#fff",
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  navbar: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "25px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    padding: "25px",
    textAlign: "center",
    textDecoration: "none",
    color: "#333",
    transition: "transform 0.3s",
    width: "280px",
  },
  cardTitle: {
    fontSize: "1.4rem",
    marginTop: "15px",
    fontWeight: "600",
  },
  cardText: {
    color: "#7f8c8d",
    fontSize: "0.95rem",
  },
};

export default StaffDashboard;
