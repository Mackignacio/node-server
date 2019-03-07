import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import { connect, connection } from "mongoose";
import errorHandler from "errorhandler";
import bodyParser from "body-parser";
import { load } from "dotenv";
import logger from "morgan";
import cors from "cors";
load();

// Define express app
const app = express();
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Add middleware and environments
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Check if on development mode
const isdev = process.env.NODE_ENV === "development";

// Get port on env
const PORT = process.env.PORT;

// Connect to mongodb database
connect(
  process.env.MONGO_URL || "MONGODB_CONNECTION",
  { useNewUrlParser: true }
);

// When connection is successful
connection.once("open", () => console.log("Connected to mongodb database"));

// When connection is failed
connection.once("error", error => console.log("Failed connecting to database. \nError:", error));

// ROUTES
routes(app);

// Error handler
if (app.get("env") === "development") {
  app.use(errorHandler());
}

// Start the server
const server = app.listen(PORT, () => console.log(`Listening for request on port ${PORT}`));
