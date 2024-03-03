// const express = require("express");
import express from "express";

import { checkToken } from "../midleware/auth.js";
import { list, Detail, Create } from "../controllers/users/index.js";

const Router = express.Router();

Router.get("/user/list", list);
Router.get("/user/:name", Detail);
Router.post("/user/new", checkToken, Create);

// Router.get("/", (req, res) => {
//   res.send("Hello World");
// });

// Router.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });

// Router.get("/about/:name", (req, res) => {
//   const { name } = req.params;
//   const { id, product_id } = req.query;

//   const body = req.body;

//   res.send({ name, id, product_id, body });
// });

// Router.post("/contact", (req, res) => {
//   res.json({
//     message: "contact",
//   });
// });

export default Router;
