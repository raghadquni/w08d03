const express = require("express");
require("dotenv").config(); 
const db = require("./db/index.js");


// instantiate express
const app = express();
app.use(express.json());

const roleRouter = require("./routers/routes/role");
app.use(roleRouter);
const userRouter = require("./routers/routes/user");
app.use(userRouter);
const todoRouter = require("./Routers/routes/todo.js");
app.use(todoRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`SERVER RUN ON PORT ${PORT}`);
  });