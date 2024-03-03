// const express = require("express");
import express from "express";
const app = express();

// Router
// const UserRoute = require("./src/routers/users.js");
import UserRoute from "./src/routers/users.js";

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false, limit: "5mb" }));

// parse application/json
app.use(express.json({ limit: "5mb" }));

app.use(UserRoute);

app.listen(3000, () => {
  console.log("app success run on http://localhost:3000 ");
});
