import { Express } from "express";
import { Routes } from "./routes";

export class Router {
  private routes: Routes = new Routes();

  constructor(private app: Express) {
    this.app = app;
  }

  public version1(): void {
    this.app.use("/v1/users", this.routes.v1.users());
  }
}
