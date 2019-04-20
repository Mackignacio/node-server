import { Router, Request, Response } from "express";
import config from "../../helper/config";
import jwt from "../../middleware/jwt";
import models from "../../models";

class Users {
  router = Router();
  model = models["users"];

  constructor() {
    this.router.get("/", (req: Request, res: Response) => this.getAllUsers(req, res));
    this.router.post("/", jwt.verifyToken, (req: Request, res: Response) => this.addUser(req, res));
    this.router.post("/login", (req: Request, res: Response) => this.getAllUsers(req, res));
  }

  async getAllUsers(req: Request, res: Response) {
    // const result = await this.model.find({}).populate("product_id");
    const result = [
      {
        id: 1,
        name: "mark",
        email: "mark@test.com"
      },
      {
        id: 1,
        name: "mark1",
        email: "mark@test.com"
      },
      {
        id: 1,
        name: "mark2",
        email: "mark@test.com"
      }
    ];
    res.json(result);
  }

  userLogin(req: Request, res: Response) {
    const user = {
      id: 1,
      name: "mark",
      email: "mark@test.com"
    };
    res.json({ token: jwt.generateToken({ user }, config.SECRET) });
  }

  addUser(req: Request, res: Response) {
    res.json({ message: "Post created", token: (<any>req)["token"], decoded: (<any>req)["decoded"] });
  }
}

export const users = new Users().router;
