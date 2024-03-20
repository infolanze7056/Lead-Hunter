const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60,
    },
});

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;