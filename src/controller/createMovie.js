import validCampVoid from "../helpers/vaidCampVoid.js";
import serviceCreateMovie from "../service/createMovie.js";

const createMovie = async (request, reply) => {
  const { title, description, rating, idUser } = request.body;

  try {
    if (validCampVoid(title, description, rating, idUser)) {
      return reply.status(400).send({ message: "Missing parameters" });
    }

    await serviceCreateMovie.createMovie(title, description, rating, idUser);
    return reply.status(201).send({ message: "movie created successfully" });
  } catch (e) {
    console.log(e);
    throw new Error("failed to create movie");
  }
};

export default { createMovie };
