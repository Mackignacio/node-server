// Node_modules imports
import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import express, { Express } from "express";
import http from "http";
import morgan from "morgan";
import config from "./helper/config";

// Local imports
import { Router } from "./router";

// Create express app
const app: Express = express();

// Define port number
const port = config.PORT;

// Define all middleware that express app will use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Error handler
if (config.IS_DEV === "development") {
  app.use(errorHandler());
}

// Create Router
const router = new Router(app);

// Enable /v1 routes
router.version1();

// Create server
const server = http.createServer(app);

// Start the server
server.listen(port, () => console.log(`Listening on port ${port}!`));

export default app;
