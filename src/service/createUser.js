import connections from "../connections/connectionsDB.js";

const createUser = async (nameUser, emailUser, passwordUser, avatar) => {
  try {
    const newUser = await connections.query(`
      INSERT INTO users (name, email, password, avatar, created_at, updated_at) values ('${nameUser}', '${emailUser}', '${passwordUser}', '${avatar}', GETDATE(), null)
    `);

    return newUser;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { createUser };
