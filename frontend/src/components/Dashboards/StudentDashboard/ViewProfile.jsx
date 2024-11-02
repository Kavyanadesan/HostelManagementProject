import React from "react";

function ViewProfile() {
  // Sample user data (this can be replaced with props or data from an API)
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 8901",
    address: "123 Main Street, Springfield",
    hostelRoom: "Room 101",
    enrollmentDate: "September 1, 2023",
  };

  return (
    <div style={styles.profileContainer}>
      <h1 style={styles.heading}>View Profile</h1>
      <div style={styles.profileCard}>
        <img
          src="https://via.placeholder.com/150"
          alt="User Profile"
          style={styles.profileImage}
        />
        <h2 style={styles.userName}>{userData.name}</h2>
        <div style={styles.userInfo}>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
          <p>
            <strong>Address:</strong> {userData.address}
          </p>
          <p>
            <strong>Hostel Room:</strong> {userData.hostelRoom}
          </p>
          <p>
            <strong>Enrollment Date:</strong> {userData.enrollmentDate}
          </p>
        </div>
        <button style={styles.editButton}>Edit Profile</button>
      </div>
    </div>
  );
}

// Styles in JavaScript
const styles = {
  profileContainer: {
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
  profileCard: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "400px",
    margin: "0 auto",
    textAlign: "left",
  },
  profileImage: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    display: "block",
    margin: "0 auto 20px",
  },
  userName: {
    textAlign: "center",
    fontSize: "1.8rem",
    color: "#34495e",
    marginBottom: "10px",
  },
  userInfo: {
    fontSize: "1rem",
    color: "#7f8c8d",
    lineHeight: "1.6",
  },
  editButton: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginTop: "20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  editButtonHover: {
    backgroundColor: "#2980b9",
  },
};

export default ViewProfile;
