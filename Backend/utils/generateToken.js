import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin }, // include isAdmin
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
};

export default generateToken;