import mongoose from "mongoose";


const commentschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    postid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
})

const comment = mongoose.model('comment', commentschema);
export default comment;