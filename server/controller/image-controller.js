
import grid from 'gridfs-stream';
import mongoose from 'mongoose';

let gfs;
const url = 'https://nitablog.herokuapp.com/';
const conn = mongoose.connection;
conn.once('open', () => {
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('fs');
})


export const uploadimage = (req, res) => {
  try {
    if (!req.file)
      return res.status(404).json('file not found');

    const imageurl = `${url}/file/${req.file.filename}`;
    res.status(200).json(imageurl);
  } catch (error) {
    res.status(500).json('error while ploading image', error);
  }
}
export const getimage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  } catch (error) {
    res.status(500).json('failed to fetch the image', error);
  }
}