import { Router } from "express";
import controller from "../../controllers/User";

const userRouter = ({ userRepository }) => {
  const userController = controller(userRepository);
  const router = Router();

  router.post("/signup", userController.createUser);
  router.post("/login", userController.loginUser);

  return router;
};

module.exports = userRouter;
