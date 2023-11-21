import connections from "../connections/connectionsDB.js";

const deleteMovie = async (id_movie) => {
  try {
    const movie = await connections.query(`
      DELETE movies_users WHERE id = ${id_movie}
    `);
    return movie;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { deleteMovie };
