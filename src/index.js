import dns from "dns";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: ".env" })
dns.setServers(["8.8.8.8", "1.1.1.1"]);


connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED !!", err)
})