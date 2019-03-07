import { Router, Request, Response } from "express";
import models from "../../models";

class Users {
  router = Router();
  model = models["users"];

  constructor() {
    this.router.get("/", (req: Request, res: Response) => this.getAllUsers(req, res));
  }

  async getAllUsers(req: Request, res: Response) {
    const result = await this.model.find({}).populate("product_id");
    res.json(result);
  }
}

export const users = new Users().router;
