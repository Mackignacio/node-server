import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "GET /user" });
});

export const users = router;
