import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import {v4 as uuid} from "uuid";
// import session from "express-session";

const app = express();
const port = 3001;

//body 데이터를 해석하기 위해서 필요하다.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cors({origin: ["http://localhost:3000"], credentials: true}));
// app.use(
//   session({
//     secret: "meiday key",
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure: true, httpOnly: true},
//   }),
// );

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("hello world");
});

app.post("/login", (req, res) => {
  res.cookie("cookieId", encodeURIComponent(uuid()), {
    httpOnly: true,
    maxAge: 300000,
  });

  res.send("ok");
});

app.post("/logout", (req, res) => {
  console.log(req.cookies);
  res.clearCookie("cookieId");
  res.send("logout");
});

app.get("/check", (req, res) => {
  console.log(req.cookies);
  res.end();
});

app.listen(port, () => {
  console.log(`backend server start port: ${port}`);
});
