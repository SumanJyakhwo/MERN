import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


//We are only using decoded token data for this protect middlware becasue we will use chain of middlewares while accessing routes e.g. ceoAndMgmt middleware uses protect middleware first to set req.user and then checks for roles or ownership. 
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
        throw new Error("Not authorized from token: user not found");
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

//CEO-only middleware we dont have to use decode token data here as protect middleware already set req.user.
export const privilegedonly = (req, res, next) => {
  if (req.user && req.user.role === "CEO") {
    return next();
  }
  res.status(403);
  throw new Error("CEO access only");
};

//Ownership Middleware
export const ownerOrPrivileged = (req, res, next) => {
  if (
    req.user &&
    (req.user.role === "Management" ||
      req.user.role === "CEO" ||
      req.user._id.toString() === req.params.id)
  ) {
    return next();
  }

  res.status(403);
  throw new Error("Access denied: not CEO, Management, or owner");
};
