import { Router, Request, Response } from "express";
import models from "../../models";

class Products {
  router = Router();
  model = models["users"];

  constructor() {
    this.router.get("/", this.getAllProducts());
  }

  getAllProducts() {
    return async (req: Request, res: Response) => {
      const result = await this.model.find({});
      res.json(result);
    };
  }
}

export const products = new Products().router;
