const postModel = require("../models/post.model");

module.exports.allPosts = (req, res) => {
    postModel
        .find()
        .sort({createdAt: -1})
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(400).json({ message: "Error to get data" + err });
        });
};

module.exports.addPost = async (req, res) => {
    const newPost = new postModel({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    try {
        const post = await newPost.save();
        return res.status(201).json(post);
    } catch (err){
        return res.status(400).json({ message: err });
    }
};

