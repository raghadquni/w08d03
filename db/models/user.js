const mongoose = require("mongoose");

const user = new mongoose.Schema({
    email: { type: String , unique: true , required: true},
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId , ref: "Role"},
});

module.exports = mongoose.model("User" , user);