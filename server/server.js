import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signUpRoutes from './routes/signup.routes.js';
import cors from 'cors';

const app = express();

//below is to get credentials from .env file
dotenv.config();

//below allows us to accept json on req.body under signup.routes.js
app.use(express.json());

app.use(cors());

//endpoint starting with client
app.use('/client', signUpRoutes);

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected") );

app.listen( 4000, () => {
    console.log("App is running")
});