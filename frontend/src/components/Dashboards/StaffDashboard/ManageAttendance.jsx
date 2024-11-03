import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManageAttendance() {
  // Sample attendance data for demonstration
  const [attendanceRecords, setAttendanceRecords] = useState([
    {
      id: 1,
      name: "Student 1",
      course: "Course A",
      date: "2024-11-01",
      status: "Present",
    },
    {
      id: 2,
      name: "Student 2",
      course: "Course B",
      date: "2024-11-01",
      status: "Absent",
    },
    {
      id: 3,
      name: "Student 3",
      course: "Course C",
      date: "2024-11-01",
      status: "Late",
    },
  ]);

  // Function to handle editing a record
  const editRecord = (id) => {
    const newStatus = prompt("Enter new status (Present, Absent, Late):");
    if (newStatus) {
      const updatedRecords = attendanceRecords.map((record) =>
        record.id === id ? { ...record, status: newStatus } : record
      );
      setAttendanceRecords(updatedRecords);
    }
  };

  // Function to handle deleting a record
  const deleteRecord = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmed) {
      const updatedRecords = attendanceRecords.filter(
        (record) => record.id !== id
      );
      setAttendanceRecords(updatedRecords);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <Navbar />
      <div style={styles.content}>
        <h1 style={styles.heading}>Manage Attendance</h1>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Student Name</th>
              <th style={styles.tableHeader}>Course</th>
              <th style={styles.tableHeader}>Date</th>
              <th style={styles.tableHeader}>Status</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record.id}>
                <td style={styles.tableCell}>{record.name}</td>
                <td style={styles.tableCell}>{record.course}</td>
                <td style={styles.tableCell}>{record.date}</td>
                <td style={styles.tableCell}>{record.status}</td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.editButton}
                    onClick={() => editRecord(record.id)}
                  >
                    Edit
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteRecord(record.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
    maxWidth: "800px",
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
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#34495e",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  tableCell: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  editButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ManageAttendance;
