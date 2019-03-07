import { Express } from "express";
import { users } from "./lib/users.routes";
import { products } from "./lib/products.routes";

export const Routes = (app: Express) => {
  // ROUTES
  app.use("/users", users);
  app.use("/products", products);
};
