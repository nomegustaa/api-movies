import { SECRET_KEY } from "../config/env.js";
import serviceListMovies from "../service/listMovies.js";
import jwt from "jsonwebtoken";

const getListMovie = async (request, reply) => {
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);
  try {
    const ListMovie = await serviceListMovies.listMovies(idUser);
    return reply.status(200).send(ListMovie);
  } catch (e) {
    console.log(e);
    throw new Error("failed list movie");
  }
};

export default { getListMovie };
