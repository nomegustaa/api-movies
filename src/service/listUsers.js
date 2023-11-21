import connections from "../connections/connectionsDB.js";

const listUser = async () => {
  try {
    const [users] = await connections.query(`
      SELECT * FROM users
    `);
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { listUser };
