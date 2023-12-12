import connetionsDb from "../connections/connectionsDB.js";

const createAvatar = async (avatar, idUser) => {
  try {
    const createAvatar = await connetionsDb.query(`
      UPDATE users SET avatar = '${avatar}' WHERE id = ${idUser}
  `);
    return createAvatar;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { createAvatar };
