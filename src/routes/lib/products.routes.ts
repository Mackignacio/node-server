import { Router } from "express";

class Products {
  router = Router();

  constructor() {
    this.router.get("/", (req, res) => {
      res.json({ message: "GET /products" });
    });
  }
}

export const products = new Products().router;
