import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    maxAge: 2592000000, //30 Days in MS
    httpOnly: true, // Prevent XSS attacks and cross-site scripting
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // Secure cookie in production
  });
};

export default generateTokenAndSetCookie;
