import express from "express";
import userRouter from "./user";
import productRouter from "./product";
import categoryRouter from "./category";
import auth from "./middleware/auth";

import swaggerUI from "swagger-ui-express";
import swaggerDoc from "../../config/swagger.json";
var options = {
  swaggerOptions: {
    authAction: {
      JWT: {
        name: "JWT",
        schema: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
          description: "",
        },
        value:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdDExLmNvbSIsInJvbGUiOiJhZG1pbiIsImZpcnN0TmFtZSI6InRlc3QiLCJsYXN0TmFtZSI6InRlc3QiLCJpYXQiOjE2MDM3OTU5OTV9.JGgokG3zDVZ-dvgUsszYIadY8xvHo5-P54PZrwScUhc",
      },
    },
  },
};

import cors from "cors";
import bodyParser from "body-parser";

const routerFunc = ({
  userRepository,
  productRepository,
  categoryRepository,
}) => {
  const router = express.Router();
  const apiRouter = express.Router();

  apiRouter.use(cors()).use(bodyParser.json());

  apiRouter.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc, options));

  apiRouter.use("/auth", userRouter({ userRepository }));

  apiRouter.use(
    "/product",
    // auth(userRepository),
    productRouter({ productRepository, categoryRepository })
  );

  apiRouter.use(
    "/category",
    // auth(userRepository),
    categoryRouter({
      categoryRepository,
    })
  );

  router.use("/api", apiRouter);

  return router;
};

export default routerFunc;
