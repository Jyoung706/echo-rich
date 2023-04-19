const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./src/routers");

const createApp = () => {
  const app = express();

  app.use(
    express.json(),
    express.urlencoded({ extended: false }),
    cors(),
    morgan("tiny"),
    router
  );

  return app;
};

module.exports = { createApp };
