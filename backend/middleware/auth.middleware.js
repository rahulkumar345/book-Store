const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(404).json({ message: "unauthorized" });
  }

  if (authorization !== process.env.ROUTE_PASSWORD) {
    return res.status(404).json({ message: "unauthorized" });
  }

  next();
};
module.exports = {
  authMiddleware: verifyAuth,
};
