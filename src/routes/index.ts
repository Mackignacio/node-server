import { Router } from "express";
import { RoutesVersion1 } from "./v1";

export class Routes {
  private router: Router = Router();
  private _v1: RoutesVersion1 = new RoutesVersion1(this.router);

  get v1() {
    return this._v1;
  }
}
