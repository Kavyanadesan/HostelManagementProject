const jwt = require("jsonwebtoken");

// Authenticate
const authenticate = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

// Authorize by Role
const authorize = (role) => (req, res, next) => {
  if (req.user.role !== role)
    return res.status(403).json({ message: "Access forbidden" });
  next();
};

module.exports = { authenticate, authorize };
