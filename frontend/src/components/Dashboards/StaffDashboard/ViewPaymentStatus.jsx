import React, { useState } from "react";
import { Link } from "react-router-dom";

function ViewPaymentStatus() {
  // Sample data for demonstration
  const paymentDetails = [
    {
      id: 1,
      name: "Student 1",
      course: "Course A",
      roomNumber: "101",
      status: "Paid",
      amount: "$500",
    },
    {
      id: 2,
      name: "Student 2",
      course: "Course B",
      roomNumber: "102",
      status: "Pending",
      amount: "$500",
    },
    {
      id: 3,
      name: "Student 3",
      course: "Course C",
      roomNumber: "103",
      status: "Overdue",
      amount: "$500",
    },
  ];

  const [selectedRoom, setSelectedRoom] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);

  // Handle room number selection
  const handleRoomSelection = (roomNumber) => {
    setSelectedRoom(roomNumber);
    const student = paymentDetails.find(
      (detail) => detail.roomNumber === roomNumber
    );
    setStudentDetails(student || null);
  };

  return (
    <div style={styles.container}>
      <Header />
      <Navbar />
      <div style={styles.content}>
        <h1 style={styles.heading}>Student Payment Status</h1>
        <div style={styles.formGroup}>
          <label style={styles.label}>Select Room Number:</label>
          <select
            value={selectedRoom}
            onChange={(e) => handleRoomSelection(e.target.value)}
            style={styles.select}
          >
            <option value="">Choose a room...</option>
            {paymentDetails.map((detail) => (
              <option key={detail.id} value={detail.roomNumber}>
                {detail.roomNumber}
              </option>
            ))}
          </select>
        </div>

        {studentDetails && (
          <div style={styles.studentDetails}>
            <p>
              <strong>Name:</strong> {studentDetails.name}
            </p>
            <p>
              <strong>Course:</strong> {studentDetails.course}
            </p>
            <p>
              <strong>Payment Status:</strong> {studentDetails.status}
            </p>
            <p>
              <strong>Amount:</strong> {studentDetails.amount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Header Component
const Header = () => (
  <header style={styles.header}>
    <h1 style={styles.headerTitle}>Hostel Management System</h1>
  </header>
);

// Navbar Component
const Navbar = () => (
  <nav style={styles.navbar}>
    <Link to="/staffdashboard" style={styles.navLink}>
      Return Home
    </Link>
  </nav>
);

// Styles in JavaScript
const styles = {
  container: {
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    backgroundColor: "#2c3e50",
    color: "#fff",
    padding: "15px 30px",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    margin: 0,
  },
  navbar: {
    backgroundColor: "#34495e",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 20px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  content: {
    maxWidth: "600px",
    margin: "30px auto",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "20px",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    color: "#2c3e50",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
    outline: "none",
  },
  studentDetails: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default ViewPaymentStatus;
