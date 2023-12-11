import { SECRET_KEY } from "../config/env.js";
import serviceListUserById from "../service/listUsersById.js";
import jwt from "jsonwebtoken";

const getUserById = async (request, reply) => {
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);
  try {
    const ListUser = await serviceListUserById.listUserById(idUser);
    return reply.status(200).send(ListUser);
  } catch (e) {
    console.log(e);
    throw new Error("failed list user");
  }
};

export default { getUserById };
