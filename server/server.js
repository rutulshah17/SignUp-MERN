import express from 'express';
import signUpRoutes from './routes/signup.routes.js';

const app = express();

//endpoint starting with client
app.use('/client', signUpRoutes);

app.listen( 4000, () => {
    console.log("App is running")
});