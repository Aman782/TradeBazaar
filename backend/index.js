import dotenv from 'dotenv';
import express from 'express';
import db_connection from './db/db_connection.js';
import { verify_JWT_Token } from './middlewares/authentication.js';
import User from './models/user_models.js';
import cors from 'cors';
import { userRoutes } from './routes/user_routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.listen(8080, () => {
    console.log("App listening at PORT 8080");
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
        origin: ["https://tradebazaarfrontend.vercel.app", "https://tradebazaar-dashboard.vercel.app"], // ✅ Allow frontend and dashboard
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true, 
    }););




db_connection();

app.get('/', (req, res) => {
    res.send("Hi User!, Welcome");
});

app.use('/users', userRoutes);
