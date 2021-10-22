import mongoose from "mongoose"



const postschema = mongoose.Schema({
    tittle: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: false
    },
    currentDate: {
        type: Date,
        required: true
    }
})

const Post = mongoose.model('post', postschema)
export default Post;