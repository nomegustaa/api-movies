import serviceCreateMovie from "../service/createMovie.js";
import responseHandle from "../helpers/responseHandler.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

const createMovie = async (request, reply) => {
  const { title, description, rating } = request.body;
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);

  if (!title || !description || !rating) {
    return responseHandle.sendErrorReply(reply, 400, "Missing parameters");
  }

  try {
    await serviceCreateMovie.createMovie(title, description, rating, idUser);
    return responseHandle.sendSuccessReply(reply, "movie created successfully");
  } catch (e) {
    console.log(e);
    throw new Error("failed to create movie");
  }
};

export default { createMovie };
