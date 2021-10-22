import express from "express";
import { createpost, gatallposts, getpost, updatepost, deletepost, userpost } from '../controller/post-controller.js';
import { uploadimage, getimage } from '../controller/image-controller.js'
import upload from '../utils/upload.js'
import { newcomment, getcomments, deletecomment } from "../controller/comment-controller.js";
import { saveprofile, loginprofile, getprofile, getuseremail, logout } from '../controller/profile-controller.js'
import auth from '../middleware/auth.js'
const router = express.Router();
const app = express();

router.post('/create', auth, createpost);

router.get('/posts', gatallposts);
router.get('/post/:id', getpost);
router.post('/update/:id', auth, updatepost);
router.delete('/delete/:id', auth, deletepost);
router.post('/file/upload', upload.single('file'), uploadimage);
router.get('/file/:filename', getimage);
router.post('/comment/new', auth, newcomment);
router.get('/comment/:id', getcomments);
router.delete('/comment/delete/:id', deletecomment);
router.post('/profile', saveprofile);
router.get('/login/:email', loginprofile);
router.get('/getuseremail', auth, getuseremail);
router.get('/userprofile', auth, getprofile);
router.get('/userpost', auth, userpost);
router.get('/logout', auth, logout);
export default router;