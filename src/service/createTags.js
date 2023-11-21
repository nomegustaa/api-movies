import connections from "../connections/connectionsDB.js";

const createMovieTags = async (note_id, userId, tag) => {
  try {
    const movieTag = await connections.query(`
      INSERT INTO 
        movies_tags (note_id, user_id, name) 
      VALUES ('${note_id}', '${userId}', '${tag}')
    `);

    return movieTag;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { createMovieTags };
