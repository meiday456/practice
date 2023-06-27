import session from "express-session";
import express from "express";

declare module "express-session" {
  export interface SessionData {
    cookie: Cookie;
    name: string;
  }
}

declare module "express" {
  export interface Request {
    cookies: {
      Cookie_2: string;
    };
  }
}
