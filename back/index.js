import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(router);

const connect = async()=>{
try{
    await mongoose.connect((process.env.MONGO));
    console.log("Connected to database");
}catch(error){
    throw error;
}
};

app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend");
})