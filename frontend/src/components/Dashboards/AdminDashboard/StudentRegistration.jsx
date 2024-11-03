import React, { useState } from "react";

function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    address: "",
    course: "",
    gender: "",
    roomNumber: "", // New field for Room Number
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission goes here
    console.log("Form Data: ", formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Registration</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Contact Number:</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        <label style={styles.label}>Course:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Room Number:</label>
        <input
          type="text"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label style={styles.label}>Gender:</label>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              style={styles.radioInput}
              required
            />
            Male
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
              style={styles.radioInput}
              required
            />
            Female
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
              style={styles.radioInput}
              required
            />
            Other
          </label>
        </div>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}

// Styles in JavaScript
const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    color: "#34495e",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    resize: "vertical",
  },
  radioGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  radioLabel: {
    color: "#34495e",
  },
  radioInput: {
    marginRight: "5px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default StudentRegistration;
