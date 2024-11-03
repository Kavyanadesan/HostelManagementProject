import React from "react";
import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const mockRequests = [
  {
    id: 1,
    studentName: "John Doe",
    leaveType: "Sick Leave",
    reason: "Feeling unwell.",
    fromDate: "2024-11-01",
    toDate: "2024-11-05",
    fileAttached: true,
  },
  {
    id: 2,
    studentName: "Jane Smith",
    leaveType: "Other Reason",
    reason: "Family function.",
    fromDate: "2024-11-10",
    toDate: "2024-11-12",
    fileAttached: false,
  },
];

function ManageMessCutRequest() {
  const [requests, setRequests] = useState(mockRequests);

  const handleApproval = (id, isApproved) => {
    setRequests(requests.filter((request) => request.id !== id));
    console.log(
      `Request ID: ${id} has been ${isApproved ? "approved" : "rejected"}.`
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mess Cut Requests</h1>
      <div style={styles.requestsContainer}>
        {requests.map((request) => (
          <div key={request.id} style={styles.requestCard}>
            <h3 style={styles.studentName}>{request.studentName}</h3>
            <p>
              <strong>Leave Type:</strong> {request.leaveType}
            </p>
            <p>
              <strong>Reason:</strong> {request.reason}
            </p>
            <p>
              <strong>From Date:</strong> {request.fromDate}
            </p>
            <p>
              <strong>To Date:</strong> {request.toDate}
            </p>
            {request.fileAttached && (
              <p style={styles.fileNotice}>Medical certificate attached.</p>
            )}
            <div style={styles.buttonGroup}>
              <button
                style={styles.approveButton}
                onClick={() => handleApproval(request.id, true)}
              >
                <FaCheckCircle /> Approve
              </button>
              <button
                style={styles.rejectButton}
                onClick={() => handleApproval(request.id, false)}
              >
                <FaTimesCircle /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles in JavaScript
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
  requestsContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  },
  requestCard: {
    backgroundColor: "#fff",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  studentName: {
    fontSize: "1.5rem",
    color: "#34495e",
  },
  fileNotice: {
    fontSize: "0.9rem",
    color: "#16a085",
    margin: "5px 0",
  },
  buttonGroup: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  approveButton: {
    padding: "10px 15px",
    backgroundColor: "#2ecc71",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  rejectButton: {
    padding: "10px 15px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
};

export default ManageMessCutRequest;
