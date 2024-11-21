import express from 'express'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.js'
import cors from 'cors'
import messageRoutes from "./routes/message.route.js";

dotenv.config()
const app = express()

const port = process.env.PORT || 3000

app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectDB();
})