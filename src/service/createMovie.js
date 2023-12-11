import connections from "../connections/connectionsDB.js";

const createMovie = async (title, description, rating, idUser) => {
  try {
    const [newMovie] = await connections.query(`
      INSERT INTO 
      movies_notes (title, description, rating, user_id, created_at, updated_at) 
      VALUES ('${title}', '${description}', '${rating}', '${idUser}', GETDATE(), GETDATE())

      DECLARE @InsertedID INT;
      SET @InsertedID = SCOPE_IDENTITY();

      SELECT @InsertedID AS idMovies;
    `);
    return newMovie[0];
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { createMovie };
