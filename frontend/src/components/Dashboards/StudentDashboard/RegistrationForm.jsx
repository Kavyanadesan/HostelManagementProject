import React from "react";

function RegistrationForm() {
  return (
    <div style={formStyles.container}>
      <h2 style={formStyles.heading}>Hostel Registration Form</h2>
      <form style={formStyles.form}>
        <label style={formStyles.label}>Full Name</label>
        <input
          type="text"
          style={formStyles.input}
          placeholder="Enter your full name"
        />

        <label style={formStyles.label}>Email</label>
        <input
          type="email"
          style={formStyles.input}
          placeholder="Enter your email"
        />

        <label style={formStyles.label}>Phone Number</label>
        <input
          type="text"
          style={formStyles.input}
          placeholder="Enter your phone number"
        />

        <label style={formStyles.label}>Room Preference</label>
        <select style={formStyles.input}>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="shared">Shared Room</option>
        </select>

        <label style={formStyles.label}>Other Details</label>
        <textarea
          style={formStyles.input}
          placeholder="Enter any additional details"
        ></textarea>

        <button type="submit" style={formStyles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

// Styles for the form
const formStyles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#3498db",
    color: "#fff",
    cursor: "pointer",
  },
};

export default RegistrationForm;
