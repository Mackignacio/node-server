import { Router } from "express";

const users = Router();

users.get("/", (req, res) => {
  res.json({ message: "GET /user" });
});

export = users;
