import serviceListMovies from "../service/listMovies.js";

const getListMovie = async (request, reply) => {
  const userId = request.params.id;
  try {
    const ListMovie = await serviceListMovies.listMovies(userId);
    return reply.status(200).send(ListMovie);
  } catch (e) {
    console.log(e);
    throw new Error("failed list movie");
  }
};

export default { getListMovie };
