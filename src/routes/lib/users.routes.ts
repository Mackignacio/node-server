import { Router, Request, Response } from "express";
import models from "../../models";

class Users {
  router = Router();
  model = models["users"];

  constructor() {
    this.router.get("/", this.getAllUsers());
  }

  getAllUsers() {
    return async (req: Request, res: Response) => {
      const result = await this.model.find({});
      res.json(result);
    };
  }
}

export const users = new Users().router;
