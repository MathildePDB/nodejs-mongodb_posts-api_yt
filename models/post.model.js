const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            maxlength: 200,
        },
        content: {
            type: String,
            required: true,
            maxlength: 2000,
        },
        author: {
            type: String,
            required: true,
            maxlength: 200,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);