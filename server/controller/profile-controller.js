import dotenv from 'dotenv'
dotenv.config();
import Profile from '../schema/profile-schema.js'
import jwt from 'jsonwebtoken';
export const saveprofile = async (req, res) => {
    try {
        const profile = await new Profile(req.body);
        if (req.body.password === req.body.cpassword) {

            // const token = await profile.generateAuthToken();
            // res.cookie('jwt', token, { expires: new Date(Date.now() + 9999999) })
            profile.save();
            res.status(200).json("'profile saved !!'");
        }
    } catch (error) {
        req.status(500).json(error);
    }
}

export const loginprofile = async (req, res) => {
    try {
        let profile = await Profile.find({ email: req.params.email });
        const token = await profile[0].generateAuthToken();
        res.cookie('jwt', token, {
            expires: new Date(Date.now() + 9999999), httpOnly: false,
        })
        res.status(200).json(profile);
        const token1 = req.cookies['jwt'];
    } catch (error) {

        req.status(500).json(error);
    }
}

export const getprofile = async (req, res) => {
    try {
        const token1 = req.cookies['jwt'];
        // console.log("The user token is", token1)
        const verifyuser = jwt.verify(token1, process.env.SECRET_KEY);
        const user = await Profile.findOne({ _id: verifyuser._id });
        // console.log(user.firstname);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}


export const getuseremail = async (req, res) => {
    try {
        const token1 = req.cookies['jwt'];
        const verifyuser = jwt.verify(token1, "mynameismohitkumarfromnationalinstituteoftechnologyagartala");
        const user = await Profile.findOne({ _id: verifyuser._id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
}


export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        await req.user.save();
        // console.log("logout successfully !!");
        res.status(200).json(' "logout successfully !!" ');
    } catch (error) {
        res.status(500).json(error)
    }
}