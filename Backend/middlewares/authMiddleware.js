import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) {
        res.status(401);
        throw new Error("Not authorized");
      }
      return next();
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        res.status(401);
        throw new Error("Token is invalid");
      } else if (error.name === "TokenExpiredError") {
        res.status(401);
        throw new Error("Token expired");
      } else {
        res.status(401);
        throw new Error("Not authorized");
      }
    }
  } else {
    res.status(401);
    throw new Error("Not authorized");
  }
});

//Admin-only middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "Management") {
    return next();
  }
  res.status(403);
  throw new Error("CEO and MANAGEMENT access only");
};

//Ownership Middleware
export const ownerOrAdmin = (req, res, next) => {
  if (
    req.user &&
    (((req.user.role === "Management" || "CEO")) || req.user._id.toString()) === req.params.id)
   {
    return next();
  }
  res.status(403);
  throw new Error("Access denied: not CEO or Management");
};