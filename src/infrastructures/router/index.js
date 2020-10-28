import express from "express";
import userRouter from "./user";
import productRouter from "./product";
import categoryRouter from "./category";
import auth from "./middleware/auth";

import swaggerUI from "swagger-ui-express";
import swaggerDoc from "../../config/swagger.json";

const routerFunc = ({
  userRepository,
  productRepository,
  categoryRepository,
}) => {
  const router = express.Router();
  const apiRouter = express.Router();

  apiRouter.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

  apiRouter.use("/auth", userRouter({ userRepository }));

  apiRouter.use(
    "/product",
    auth(userRepository),
    productRouter({ productRepository, categoryRepository })
  );

  apiRouter.use(
    "/category",
    auth(userRepository),
    categoryRouter({
      categoryRepository,
    })
  );

  router.use("/api", apiRouter);

  return router;
};

export default routerFunc;
