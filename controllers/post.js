import { db } from "../db.js"

// ======== GET ALL POSTS ============

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";
    
    db.query(q, [req.query.cat], (err, data) => {
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
};

// =========== GET SINGLE POST ==========

export const getPost = (req, res) => {
    const q = "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";

    db.query(q, [], (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data[0]);
    });
};

// ============ ADD POST ===============

export const addPost = (req, res) => {
    res.json("from controller")
};

// ============= DELETE POST ===============

export const deletePost = (req, res) => {
    res.json("from controller")
};

// ============ UPDATE POST ===============

export const updatePost = (req, res) => {
    res.json("from controller")
};