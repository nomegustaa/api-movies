import serviceCreateMovie from "../service/createMovie.js";
import serviceCreateTags from "../service/createTags.js";
import responseHandle from "../helpers/responseHandler.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

const createMovie = async (request, reply) => {
  const { title, description, rating, tags } = request.body;
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);

  if (!title || !description || !rating) {
    return responseHandle.sendErrorReply(reply, 400, "Missing parameters");
  }

  try {
    const { idMovies } = await serviceCreateMovie.createMovie(
      title,
      description,
      rating,
      idUser
    );
    const tagPromise = tags.map(async (tag) => {
      await serviceCreateTags.createMovieTags(idMovies, idUser, tag);
    });
    await Promise.all(tagPromise);
    return responseHandle.sendSuccessReply(reply, "movie created successfully");
  } catch (e) {
    console.log(e);
    throw new Error("failed to create movie");
  }
};

export default { createMovie };
