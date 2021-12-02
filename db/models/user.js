const mongoose = require("mongoose");

const user = new mongoose.Schema({
    userNme: { type: String , required: true  },
    email: { type: String , required: true  },
    password: { type: String, required: true },
    isDel: { type: Boolean, default: false },
    role: { type: mongoose.Schema.Types.ObjectId , ref: "RoleSchema" },
});

module.exports = mongoose.model("User" , user);