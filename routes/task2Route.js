const express = require("express");
const route = express.Router();
const controller = require("../controllers/controller");

route.get("/", controller.task2);
route.post("/", controller.task2Post);

module.exports = route;