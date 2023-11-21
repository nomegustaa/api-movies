import connections from "../connections/connectionsDB.js";

const listMovies = async (userId) => {
  try {
    const [movies] = await connections.query(`
      SELECT * FROM movies_users WHERE user_id = ${userId}
    `);
    return movies;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { listMovies };
