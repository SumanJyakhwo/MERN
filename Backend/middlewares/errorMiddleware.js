export const notFound = (req, res, next) => {
  res.status(404);
  res.json({ success: false, message: `Route not found - ${req.originalUrl}` });
};

export const errorHandler = (err, req, res, next) => {
  res.status(res.statuscode === 200 ? 500 : res.statuscode);
  res.json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
