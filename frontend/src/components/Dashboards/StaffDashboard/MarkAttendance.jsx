import React, { useState } from "react";
import { Link } from "react-router-dom";

function MarkAttendance() {
  // State to handle room number selection and student details
  const [roomNumber, setRoomNumber] = useState("");
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    course: "",
  });

  // Sample data for room numbers, students, and their courses
  const studentData = {
    room1: { name: "Student 1", course: "Course A" },
    room2: { name: "Student 2", course: "Course B" },
    room3: { name: "Student 3", course: "Course C" },
  };

  // Handle room number change
  const handleRoomNumberChange = (event) => {
    const selectedRoom = event.target.value;
    setRoomNumber(selectedRoom);
    if (studentData[selectedRoom]) {
      setStudentDetails(studentData[selectedRoom]);
    } else {
      setStudentDetails({ name: "", course: "" });
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <Navbar />
      <div style={styles.content}>
        <h1 style={styles.heading}>Mark Attendance</h1>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Room Number:</label>
            <select
              value={roomNumber}
              onChange={handleRoomNumberChange}
              style={styles.select}
            >
              <option value="">Select a room...</option>
              <option value="room1">Room 1</option>
              <option value="room2">Room 2</option>
              <option value="room3">Room 3</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Student Name:</label>
            <input
              type="text"
              value={studentDetails.name}
              readOnly
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Course:</label>
            <input
              type="text"
              value={studentDetails.course}
              readOnly
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Date:</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Status:</label>
            <select style={styles.select}>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
              <option value="late">Late</option>
            </select>
          </div>
          <button type="submit" style={styles.submitButton}>
            Submit Attendance
          </button>
        </form>
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
      Home
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
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: "8px",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    width: "100%",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    marginTop: "10px",
  },
};

export default MarkAttendance;
