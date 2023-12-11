import ServiceListUsers from "../service/listUsers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";
import responseHandler from "../helpers/responseHandler.js";

const loginUser = async (request, reply) => {
  const { emailUser, passwordUser } = request.body;
  try {
    const users = await ServiceListUsers.listUser();
    const infoUser = users.find((userEmail) => userEmail.email === emailUser);

    if (!infoUser) {
      return responseHandler.sendErrorReply(reply, 400, "email not registered");
    }

    const passwordHash = await bcrypt.compare(passwordUser, infoUser.password);

    if (!passwordHash) {
      return responseHandler.sendErrorReply(reply, 400, "password invalid");
    }

    const token = jwt.sign({ idUser: infoUser.id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    reply.status(200).send({ token: token });
  } catch (e) {
    console.log(e);
    throw new Error("login failed");
  }
};

export default { loginUser };
