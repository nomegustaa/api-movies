import serviceDeleteMovies from "../service/deleteMovie.js";

const deleteMovie = async (request, reply) => {
  const userId = request.params.idMovie;
  try {
    await serviceDeleteMovies.deleteMovie(userId);
    return reply.status(200).send({ message: "movie delete successfully" });
  } catch (e) {
    console.log(e);
    throw new Error("failed to delete movie");
  }
};

export default { deleteMovie };
