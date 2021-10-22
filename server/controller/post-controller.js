import Post from "../schema/post-schema.js";
import jwt from 'jsonwebtoken';
import Profile from '../schema/profile-schema.js'


export const createpost = async (req, res) => {
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json('blog saved successfully');
    } catch (error) {
        res.status(500).json(error)
    }
}

export const gatallposts = async (req, res) => {
    let username = req.query.username;
    let categories = req.query.categories;
    let posts;
    try {
        if (username)
            posts = await Post.find({ username: username });
        else if (categories)
            posts = await Post.find({ categories: categories });
        else
            posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getpost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatepost = async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Blog updated successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletepost = async (req, res) => {
    try {
        let post = await Post.findById(req.params.id);
        await post.delete();
        res.status(200).json('Blog updated successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}


export const userpost = async (req, res) => {
    try {
        const token1 = req.cookies['jwt'];
        const verifyuser = jwt.verify(token1, "mynameismohitkumarfromnationalinstituteoftechnologyagartala");
        const user = await Profile.findOne({ _id: verifyuser._id });
        let post = await Post.find({ username: user.email });
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error)
    }
}

