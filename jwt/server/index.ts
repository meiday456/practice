import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import {Client} from "pg";
import CookieRouter from "./cookie/index";
import whiteList from "./whiteList";

const dbClient = new Client({
  host: "127.0.0.1",
  database: "dev",
  port: 5432,
  user: "postgres",
  password: "meiday",
});

dbClient.connect().catch((error: Error) => {
  console.log(`DB connection error : ${error.message}`);
});

const app = express();
const port = 3001;

//body 데이터를 해석하기 위해서 필요하다.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({origin: whiteList, credentials: true}));

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("hello world");
});

app.use("/cookie", CookieRouter);

app.get("/dbTest", (req, res) => {
  dbClient.query(`SELECT name FROM node."user"`, (error, result) => {
    if (error) {
      res.sendStatus(500);
    } else {
      console.log("isOk?");
      res.status(200).send(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`backend server start port: ${port}`);
});
