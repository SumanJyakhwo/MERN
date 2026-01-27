export const notFound = (req, res, next) => {
  res.status(404);
  res.json({ success: false, message: `Route not found - ${req.originalUrl}` });
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

/* this threw error of invalid status code: undefined. status code must be an integer
export const errorHandler = (err, req, res, next) => {
  res.status(res.statuscode === 200 ? 500 : res.statuscode);
  res.json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
*/