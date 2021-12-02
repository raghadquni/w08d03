const express = require("express");
const userRouter = express.Router();
const { register, getUsers, login , deleteUser} = require("../controller/user");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorizathion");


userRouter.post("/signup", register);
userRouter.get("/getUsers", authentication, authorization, getUsers); // admin token
userRouter.post("/login", login);
userRouter.put("/delete", authentication, authorization ,deleteUser); // admin token


module.exports = userRouter;