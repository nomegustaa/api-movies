import controllerCreateUser from "../controller/createUser.js";
import controllerCreateMovie from "../controller/createMovie.js";
import controllerCreateTag from "../controller/createTags.js";
import controllerLoginUser from "../controller/loginUser.js";
import controlllerMovies from "../controller/listMovies.js";
import controlllerMoviesById from "../controller/listMovieById.js";
import controllerListUserById from "../controller/listUserById.js";
import controllerDeleteMovie from "../controller/deleteMovie.js";
import controllerUpdateUser from "../controller/updateUser.js";
import controllerCreateAvatar from "../controller/createAvatar.js";
import controllerGetAvatar from "../controller/getAvatar.js";
import MiddlewareAuthentatication from "../middleware/authentication.js";
import controllerAuthUser from "../controller/authUser.js";

const Routes = async (fastify, options) => {
  fastify.addHook("onRequest", MiddlewareAuthentatication.authentication);

  fastify.post("/loginUser", controllerLoginUser.loginUser);

  fastify.post("/createUser", controllerCreateUser.createUser);

  fastify.post("/createmovie", controllerCreateMovie.createMovie);

  fastify.post("/createTag/:id", controllerCreateTag.createTag);

  fastify.get("/movies", controlllerMovies.getListMovie);

  fastify.get("/moviesById/:id", controlllerMoviesById.getListMovieById);

  fastify.delete("/deleteMovie/:idMovie", controllerDeleteMovie.deleteMovie);

  fastify.put("/updateuser", controllerUpdateUser.updateUser);

  fastify.get("/auth/checktoken", controllerAuthUser.authUser);

  fastify.get("/listuser", controllerListUserById.getUserById);

  fastify.post("/createavatar", controllerCreateAvatar.createAvatar);

  fastify.get("/getavatar", controllerGetAvatar.getAvatar);
};

export default Routes;
