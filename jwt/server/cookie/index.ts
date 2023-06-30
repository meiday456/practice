import express from "express";
import {v4 as uuid} from "uuid";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("cache");
});

router.post("/login", (req, res) => {
  console.log("req.sessionID", req.sessionID);
  console.log(req.session);

  res.cookie("cookieId", encodeURIComponent(uuid()), {
    httpOnly: true,
    maxAge: 300000,
  });

  res.send("ok");
});

router.post("/logout", (req, res) => {
  console.log(req.cookies);
  res.clearCookie("cookieId");
  res.send("logout");
});

router.get("/check", (req, res) => {
  console.log(req.cookies);
  res.end();
});

export default router;
