import response from "../../module/response";

const userContoller = ({ createUserUsecase, loginUserUsecase }) => ({
  createUser: async (req, res, next) => {
    try {
      const userData = req.body;

      const user = await createUserUsecase(userData);
      return response.success(res, user, 200);
    } catch (error) {
      next(error);
    }
  },

  loginUser: async (req, res, next) => {
    try {
      const data = req.body;

      const user = await loginUserUsecase(data);
      return response.success(res, user, 200);
    } catch (error) {
      next(error);
    }
  },
});

export default userContoller;
