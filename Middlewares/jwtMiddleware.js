// jwtMiddleware.js
const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
  console.log("Inside JWT Middleware");

  try {
    const token = req.headers['authorization']?.split(" ")[1];

    if (token) {
      const jwtResponse = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log("JWT Verification Success:", jwtResponse);
      req.payload = jwtResponse.userId;
      next();
    } else {
      console.error("Token not provided in headers");
      res.status(406).json("Please provide a token!");
    }
  } catch (error) {
    console.error("JWT Verification Error:", error);
    res.status(401).json("Access denied...please login");
  }
};

module.exports = jwtMiddleware;
