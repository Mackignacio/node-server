import { Router } from "express";

const products = Router();

products.get("/", (req, res) => {
  res.json({ message: "GET /products" });
});

export = products;
