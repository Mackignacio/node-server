import { Router } from "express";

class Users {
  router = Router();

  constructor() {
    this.router.get("/", (req, res) => {
      res.json({ message: "GET /user" });
    });
  }
}

export const users = new Users().router;
