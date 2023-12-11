import connections from "../connections/connectionsDB.js";

const listUserById = async (idUser) => {
  try {
    const [user] = await connections.query(`
    select * from users where id = ${idUser}
    `);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { listUserById };
