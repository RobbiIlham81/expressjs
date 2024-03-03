/** @typedef {import("express").RequestHandler} */
export const checkToken = (req, res, next) => {
  const token = req.headers.token;

  if (token === "success") next();

  res.status(401).send({
    message: "Anda belum online",
  });
};
