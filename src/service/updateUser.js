import connetionsDb from "../connections/connectionsDB.js";

const updateUser = async (name, email, password, avatar, idUser) => {
  try {
    const update = await connetionsDb.query(`
    UPDATE users 
      SET name = '${name}', email = '${email}', password = '${password}', avatar = '${avatar}', updated_at = GETDATE()
    WHERE id = '${idUser}'
  `);
    return update;
  } catch (e) {
    console.log(e);
    throw new Error("error access DB");
  }
};

export default { updateUser };
