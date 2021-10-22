
// import comment from "../schema/comment-schema.js";
import Comment from "../schema/comment-schema.js";

export const newcomment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        comment.save();
        res.status(200).json('comment saved successfully')
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getcomments = async (req, res) => {
    try {
        const comments = await Comment.find({ postid: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletecomment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await comment.delete();
        res.status(200).json("comment deleted sucessfully");
    } catch (error) {
        res.status(500).json(error);
    }
}