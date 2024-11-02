import React from "react";

function ViewAttendance() {
  // Sample data
  const attendanceRecords = [
    { date: "2024-10-01", status: "Present" },
    { date: "2024-10-02", status: "Absent" },
    { date: "2024-10-03", status: "Present" },
    // More records...
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>View Attendance</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record, index) => (
            <tr key={index}>
              <td style={styles.tableData}>{record.date}</td>
              <td style={styles.tableData}>{record.status}</td>
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
  table: {
    width: "80%",
    margin: "0 auto",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    border: "1px solid #ddd",
  },
  tableData: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
  },
};

export default ViewAttendance;
