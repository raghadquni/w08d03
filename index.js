const express = require("express");
require("dotenv").config(); 
const db = require("./db/index.js");
const cors = require("cors");

// instantiate express
const app = express();
app.use(express.json());

app.use(cors());


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