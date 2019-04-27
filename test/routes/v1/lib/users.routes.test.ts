import { Users } from "../../../../src/routes/v1/lib/users.routes";
import request, { SuperTest, Test } from "supertest";
import express, { Express } from "express";
import { connect } from "mongoose";
import server from "../../../../src";
import { config } from "dotenv";
config();

const userTest = (): void => {
  let supertest;
  beforeAll(async done => {
    const uri = process.env.MONGO_CONNECTION_URL_TEST;
    const conn = await connect(
      uri,
      { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false }
    );
    server.set("mongoConnection", conn);
    supertest = request(server);
    done();
  });

  afterAll(async () => {});
};

export default userTest;
