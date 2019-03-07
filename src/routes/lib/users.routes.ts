import { Router, Request, Response } from "express";

class Users {
  router = Router();

  constructor() {
    this.router.get("/", this.getAllUsers());
  }

  getAllUsers() {
    return (req: Request, res: Response) => {
      res.json({ message: "GET /user" });
    };
  }
}

export const users = new Users().router;
