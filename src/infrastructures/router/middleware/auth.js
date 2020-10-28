import jwt from "jsonwebtoken";
import config from "../../../config/env";

const getToken = (req) => {
  let {
    headers: { authorization },
  } = req;
  if (typeof authorization === "undefined" || !authorization) {
    throw new Error("Auth token missing");
  }
  if ((authorization && authorization.split(" ") === "Bearer") || "Token") {
    return authorization.split(" ")[1];
  }
  throw new Error("Auth token malformed");
};

const auth = (userRepository) => async (req, res, next) => {
  console.log(req.headers);
  try {
    const token = getToken(req);

    const decoded = jwt.verify(token, config.JWTSecret);
    const user = await userRepository.findByEmail(decoded.email);
    if (!user) throw Error("User Doesnt't Exist");
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
