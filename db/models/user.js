const mongoose = require("mongoose");

const user = new mongoose.Schema({
    userNme: { type: String  },
    email: { type: String ,  unique: true ,required: true},
    password: { type: String, required: true },
    isDel: { type: Boolean, default: false },
    role: { type: mongoose.Schema.Types.ObjectId , ref: "Role" , default : "61ac9b6fac07125a60d34173"},
});

module.exports = mongoose.model("User" , user);