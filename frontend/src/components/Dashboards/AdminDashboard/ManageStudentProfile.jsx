// ManageStudentProfile.jsx
import React from "react";

function ManageStudentProfile() {
  // Sample data for demonstration
  const students = [
    { id: 1, name: "John Doe", rollNumber: "12345", department: "CSE" },
    { id: 2, name: "Jane Smith", rollNumber: "67890", department: "ECE" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Student Profiles</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.department}</td>
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
  th: {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "8px",
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

export default ManageStudentProfile;
