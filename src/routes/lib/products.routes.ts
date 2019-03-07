import { Router, Request, Response } from "express";

class Products {
  router = Router();

  constructor() {
    this.router.get("/", this.getAllProducts());
  }

  getAllProducts() {
    return (req: Request, res: Response) => {
       res.json({ message: "GET /products" });
    };
  }
}

export const products = new Products().router;
