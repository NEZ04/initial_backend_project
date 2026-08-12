import dns from "dns";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
dotenv.config({ path: ".env" })
dns.setServers(["8.8.8.8", "1.1.1.1"]);
connectDb()