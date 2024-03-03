import dataUser from "../../models/dataUser.js";

/** @typedef {import("express").RequestHandler} */
const list = (req, res) => {
  res.send({ dataUser });
};

/** @typedef {import("express").RequestHandler} */
const Detail = (req, res) => {
  const name = req.params.name;

  const result = dataUser.filter((data) => data, name);

  res.send({ result });
};

/** @typedef {import("express").RequestHandler} */
const Create = (req, res) => {
  const body = req.body;

  dataUser.push(body);

  res.status(201).send({ dataUser });
};

export { list, Detail, Create };
