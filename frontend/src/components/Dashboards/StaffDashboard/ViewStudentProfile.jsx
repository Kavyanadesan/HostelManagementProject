import React, { useState } from "react";
import { Link } from "react-router-dom";

function ViewStudentProfile() {
  // Sample student data for demonstration
  const studentDetails = [
    {
      id: 1,
      name: "Student 1",
      course: "Course A",
      roomNumber: "101",
      email: "student1@example.com",
    },
    {
      id: 2,
      name: "Student 2",
      course: "Course B",
      roomNumber: "102",
      email: "student2@example.com",
    },
    {
      id: 3,
      name: "Student 3",
      course: "Course C",
      roomNumber: "103",
      email: "student3@example.com",
    },
  ];

  // State for the search input
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered student details based on search input
  const filteredStudents = studentDetails.filter((student) =>
    student.roomNumber.includes(searchQuery)
  );

  return (
    <div style={styles.container}>
      <Header />
      <Navbar />
      <div style={styles.content}>
        <h1 style={styles.heading}>Registered Student Details</h1>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search by Room Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Name</th>
              <th style={styles.tableHeader}>Course</th>
              <th style={styles.tableHeader}>Room Number</th>
              <th style={styles.tableHeader}>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td style={styles.tableCell}>{student.name}</td>
                  <td style={styles.tableCell}>{student.course}</td>
                  <td style={styles.tableCell}>{student.roomNumber}</td>
                  <td style={styles.tableCell}>{student.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={styles.noResults}>
                  No student found for this room number.
                </td>
              </tr>
            )}
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
  searchBox: {
    marginBottom: "20px",
    textAlign: "center",
  },
  searchInput: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "80%",
    outline: "none",
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
  noResults: {
    padding: "10px",
    textAlign: "center",
    color: "#555",
  },
};

export default ViewStudentProfile;
