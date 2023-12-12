import { SECRET_KEY } from "../config/env.js";
import serviceGetAvatar from "../service/getAvatar.js";
import jwt from "jsonwebtoken";

const getAvatar = async (request, reply) => {
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);
  try {
    const avatarBase64 = await serviceGetAvatar.getBase64(idUser);
    return reply.status(200).send(avatarBase64);
  } catch (e) {
    console.log(e);
    throw new Error("failed get avatar");
  }
};

export default { getAvatar };
