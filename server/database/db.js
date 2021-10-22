import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const connection = async () => {
    try {
        const URL = process.env.MONGO_URL;
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Database connection successfully");
    } catch (err) {
        console.log("Error,while connecting MongoDB", err);
    }
}
export default connection;
