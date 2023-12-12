import connetionsDb from "../connections/connectionsDB.js";

const getBase64 = async (idUser) => {
  try {
    const [base64] = await connetionsDb.query(`
      SELECT avatar FROM users WHERE id = ${idUser}
    `);
    return base64[0];
  } catch (e) {
    console.log("error accss banc", e);
  }
};

export default { getBase64 };
