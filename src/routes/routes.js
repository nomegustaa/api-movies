import controllerCreateUser from "../controller/createUser.js";
import controllerCreateMovie from "../controller/createMovie.js";
import controllerCreateTag from "../controller/createTags.js";
import controllerLoginUser from "../controller/loginUser.js";
import controlllerMovies from "../controller/listMovies.js";
import controllerDeleteMovie from "../controller/deleteMovie.js";
import MiddlewareAuthentatication from "../middleware/authentication.js";

const Routes = async (fastify, options) => {
  fastify.addHook("onRequest", MiddlewareAuthentatication.authentication);

  fastify.post("/loginUser", controllerLoginUser.loginUser);

  fastify.post("/createUser", controllerCreateUser.createUser);

  fastify.post("/createMovie", controllerCreateMovie.createMovie);

  fastify.post("/createTag/:id", controllerCreateTag.createTag);

  fastify.get("/movies/:id", controlllerMovies.getListMovie);

  fastify.delete("/deleteMovie/:idMovie", controllerDeleteMovie.deleteMovie);
};

export default Routes;
