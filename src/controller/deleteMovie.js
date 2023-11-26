import responseHandler from "../helpers/responseHandler.js";
import serviceDeleteMovies from "../service/deleteMovie.js";

const deleteMovie = async (request, reply) => {
  const idMovie = request.params.idMovie;
  try {
    await serviceDeleteMovies.deleteMovie(idMovie);
    return responseHandler.sendSuccessReply(reply, "movie delete successfully");
  } catch (e) {
    console.log(e);
    throw new Error("failed to delete movie");
  }
};

export default { deleteMovie };
