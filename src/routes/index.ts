import { Express } from "express";
import { users } from "./lib/users.routes";

export class Router {
  constructor(private app: Express) {
    this.app = app;
  }

  version1() {
    this.app.use("/v1/users", users);
  }
}
