const mongoose = require("mongoose");

const todo = new mongoose.Schema({
  name: { type: String, required: true },
  isDel: { type: Boolean, required: true, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Todo", todo);