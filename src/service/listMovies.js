import connections from "../connections/connectionsDB.js";

const listMovies = async (userId) => {
  try {
    const [movies] = await connections.query(`
    SELECT 
      mn.id,
      mn.created_at,
      mn.description,
      mn.title,
      mn.rating,
      mn.updated_at,
      mn.user_id,
    STRING_AGG(mt.name, ', ') AS tags_names
      FROM movies_notes AS mn
      LEFT JOIN movies_tags AS mt ON mn.id = mt.note_id
      WHERE mn.user_id = ${userId}  
    GROUP BY
      mn.id,
      mn.created_at,
      mn.description,
      mn.title,
      mn.rating,
      mn.updated_at,
      mn.user_id
    `);
    return movies;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { listMovies };
