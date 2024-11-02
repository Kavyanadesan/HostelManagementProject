import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserEdit,
  FaUserCircle,
  FaClipboardList,
  FaMoneyBill,
  FaUtensils,
} from "react-icons/fa";

function StudentDashboard() {
  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.heading}>Student Dashboard</h1>
      <div style={styles.cardsContainer}>
        {/* Registration Card */}
        <Link to="/registration" style={styles.card}>
          <FaUserEdit size={50} color="#3498db" />
          <h3 style={styles.cardTitle}>Registration</h3>
          <p style={styles.cardText}>
            Complete your hostel registration easily.
          </p>
        </Link>

        {/* View Profile Card */}
        <Link to="/viewprofile" style={styles.card}>
          <FaUserCircle size={50} color="#2ecc71" />
          <h3 style={styles.cardTitle}>View Profile</h3>
          <p style={styles.cardText}>Check and update your profile details.</p>
        </Link>

        {/* View Attendance Card */}
        <Link to="/viewattendance" style={styles.card}>
          <FaClipboardList size={50} color="#e67e22" />
          <h3 style={styles.cardTitle}>View Attendance</h3>
          <p style={styles.cardText}>Track your attendance record easily.</p>
        </Link>

        {/* Payment Card */}
        <Link to="/payment" style={styles.card}>
          <FaMoneyBill size={50} color="#e74c3c" />
          <h3 style={styles.cardTitle}>Payment</h3>
          <p style={styles.cardText}>Pay your hostel fees securely online.</p>
        </Link>

        {/* Request for Mess Cut Card */}
        <Link to="/messcutrequest" style={styles.card}>
          <FaUtensils size={50} color="#9b59b6" />
          <h3 style={styles.cardTitle}>Request for Mess Cut</h3>
          <p style={styles.cardText}>
            Submit requests for mess cuts or other services.
          </p>
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
    textDecoration: "none", // Removes underline from the link
    color: "inherit", // Keeps the original color
  },
  cardTitle: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  cardText: {
    fontSize: "1rem",
    color: "#7f8c8d",
  },
};

export default StudentDashboard;
