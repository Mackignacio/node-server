import { Users } from "./lib/users.routes";
import jwt from "../../middleware/jwt";
import { Router } from "express";

export class RoutesVersion1 {
  private user: Users = new Users();

  constructor(private router: Router) {
    this.router = router;
  }

  users() {
    return this.router
      .get("/", jwt.verifyToken, this.user.getAllUsers)
      .post("/", jwt.verifyToken, this.user.addUser)
      .post("/login", this.user.userLogin);
  }
}
