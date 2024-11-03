// AttendanceManagement.jsx
import React from "react";

function AttendanceManagement() {
  // Sample data for demonstration
  const attendanceRecords = [
    { id: 1, name: "John Doe", date: "2024-10-01", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2024-10-01", status: "Absent" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Attendance</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.status}</td>
              <td>
                <button style={styles.editButton}>Edit</button>
                <button style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8rem",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  editButton: {
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AttendanceManagement;
