import express from "express";
import cors from "cors";
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';
import cookieParser from "cookie-parser";

const app = express();


// ==================================== MIDDLEWARES =======================================
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

// ==================================== PORT SERVER =======================================
app.listen(8800, () => {
    console.log("Backend connected...")
});