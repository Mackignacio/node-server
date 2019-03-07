import express, { Request, Response, NextFunction } from "express";
import { connect, connection } from "mongoose";
import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import logger from "morgan";
import { load } from "dotenv";
load();

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Check if on development mode
const isdev = process.env.NODE_ENV === "development";

// Get port on env
const PORT = process.env.PORT;

// Connect to mongodb database
connect(
  process.env.MONGO_URl || "MONGODB_CONNECTION",
  { useNewUrlParser: true }
);

// When connection is successful
connection.once("open", () => console.log("Connected to mongodb database"));

// When connection is failed
connection.once("error", error => console.log("Failed connecting to database. \nError:", error));

// ROUTES
app.get("/");

// Error handler
if (app.get("env") === "development") {
  app.use(errorHandler());
}

// Start the server
const server = app.listen(PORT, () => console.log(`Listening for request on port ${PORT}`));
