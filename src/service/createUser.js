import connections from "../connections/connectionsDB.js";

const createUser = async (nameUser, emailUser, passwordUser) => {
  try {
    const [newUser] = await connections.query(`
      INSERT INTO users (name, email, password, created_at, updated_at) values ('${nameUser}', '${emailUser}', '${passwordUser}', GETDATE(),  GETDATE())
      DECLARE @UserID INT;
      SET @UserID = SCOPE_IDENTITY();

      SELECT @UserID AS idUser;
    `);
    return newUser[0];
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { createUser };
