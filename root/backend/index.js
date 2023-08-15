import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connect.js";
import signupRouter from "./routes/signup.routes.js"
import signinRouter from "./routes/signin.rotutes.js"

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send({message:"Ola"});
})

app.use("/api/v1/signup", signupRouter);
app.use("/api/v1/signin", signinRouter);

const startServer = async () => {
    try {
        connectDB(process.env.DB_URI);

        app.listen(5051, () => console.log("Server started on port http://localhost:5051"));
    } catch (error) {
        console.log(error);
    }
};

startServer();


