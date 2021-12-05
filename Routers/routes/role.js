const express = require("express");
const { createRole, getRole } = require("./../controller/role");
const authentication = require("./../middleware/authentication");
const authorization = require("./../middleware/authorizathion")
const roleRouter = express.Router();

roleRouter.post("/createRole", createRole);
roleRouter.get("/getRole", authentication, authorization,  getRole);

module.exports = roleRouter;
