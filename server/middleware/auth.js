
import jwt from 'jsonwebtoken';
import post from '../schema/post-schema.js'
import profile from '../schema/profile-schema.js';


const auth = async (req, res, next) => {
    try {

        const token = req.cookies['jwt'];
        // console.log("The token is", token) //it shows undefined
        const verifyuser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await profile.findOne({ _id: verifyuser._id });

        // console.log(verifyuser);
        // console.log(user);
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json(error);
    }
}

export default auth;