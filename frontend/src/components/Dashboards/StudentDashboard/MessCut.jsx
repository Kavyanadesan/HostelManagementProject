import React, { useState } from "react";

function RequestForMessCut() {
  const [leaveType, setLeaveType] = useState("Sick Leave");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || "");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Request for Mess Cut</h1>
      <form style={styles.form}>
        {/* Dropdown for Leave Type */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Leave Type:</label>
          <select
            style={styles.select}
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="Sick Leave">Sick Leave</option>
            <option value="Other Reason">Other Reason</option>
          </select>
        </div>

        {/* Textarea for Reason */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Reason:</label>
          <textarea
            style={styles.textarea}
            placeholder="Enter the reason for requesting a mess cut"
          ></textarea>
        </div>

        {/* Date Pickers */}
        <div style={styles.formGroup}>
          <label style={styles.label}>From Date:</label>
          <input type="date" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>To Date:</label>
          <input type="date" style={styles.input} />
        </div>

        {/* File Upload for Medical Certificate */}
        {leaveType === "Sick Leave" && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Upload Medical Certificate:</label>
            <input
              type="file"
              style={styles.fileInput}
              onChange={handleFileChange}
            />
            {fileName && <p style={styles.fileName}>Selected: {fileName}</p>}
          </div>
        )}

        {/* Submit Button */}
        <button style={styles.submitButton}>Submit Request</button>
      </form>
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
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#34495e",
  },
  select: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
    resize: "vertical",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
  },
  fileInput: {
    width: "100%",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    outline: "none",
  },
  fileName: {
    marginTop: "5px",
    fontSize: "0.9rem",
    color: "#7f8c8d",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#9b59b6",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RequestForMessCut;
