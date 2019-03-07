import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "GET /products" });
});

export const products = router;
