import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";

const app = express();
dotenv.config({ path: "../.env" }); // Reads .env file and makes it accessible via process.env

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running at ${process.env.SERVER_PORT}`);
});

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

const connectToDB = async () => {
  try {
    await pool.connect();
    console.log("Connected to postgres.");
  } catch (err) {
    console.log(err);
  }
};

connectToDB();
