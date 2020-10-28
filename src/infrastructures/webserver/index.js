import express from "express";
import config from "../../config/env";
import errorHandler from "./errorHandler";

module.exports = (router) => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(router);

  errorHandler(app);

  const applyMiddleware = (middleware) => {
    app.use(middleware);
  };

  const start = () => {
    app.listen(config.PORT, () => {
      console.log("App started at " + config.PORT);
    });
  };

  return {
    start,
    applyMiddleware,
  };
};
