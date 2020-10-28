import "dotenv";
import server from "./infrastructures/webserver";
import Router from "./infrastructures/router";
import Database from "./infrastructures/mongoose";
const { User, Product, Category } = Database.getModels();

import Repository from "./infrastructures/repository";
const userRepository = Repository(User);
const productRepository = Repository(Product);
const categoryRepository = Repository(Category);

const router = Router({
  userRepository,
  productRepository,
  categoryRepository,
});
const webserver = server(router);

const startServer = () => {
  webserver.start();
};
const database = new Database();

database.connect(startServer);
