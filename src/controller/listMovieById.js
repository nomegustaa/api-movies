import { SECRET_KEY } from "../config/env.js";
import serviceListMovies from "../service/listMovieById.js";
import jwt from "jsonwebtoken";

const getListMovieById = async (request, reply) => {
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);
  const { id } = request.params;

  try {
    const ListMovieById = await serviceListMovies.listMoviesById(idUser, id);
    return reply.status(200).send(ListMovieById);
  } catch (e) {
    console.log(e);
    throw new Error("failed list movie");
  }
};

export default { getListMovieById };
