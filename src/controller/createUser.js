import ServiceCreateUser from "../service/createUser.js";
import ServicelistUsers from "../service/listUsers.js";
import { BCRYPT_AMOUNT, SECRET_KEY } from "../config/env.js";
import jwt from "jsonwebtoken";
import responseHandler from "../helpers/responseHandler.js";
import bcrypt from "bcrypt";

const createUser = async (request, reply) => {
  const { nameUser, emailUser, passwordUser } = request.body;

  if (!nameUser || !emailUser || !passwordUser) {
    responseHandler.sendErrorReply(reply, 400, "Missing parameters");
  }
  try {
    const validEmailExisting = await ServicelistUsers.listUser();

    if (validEmailExisting.some((userEmail) => userEmail.email === emailUser)) {
      return responseHandler.sendErrorReply(reply, 400, "email already exists");
    }

    const passwordHash = await bcrypt.hash(passwordUser, Number(BCRYPT_AMOUNT));

    const { idUser } = await ServiceCreateUser.createUser(
      nameUser,
      emailUser,
      passwordHash
    );

    const token = jwt.sign({ idUser: idUser }, SECRET_KEY, {
      expiresIn: "1h",
    });

    reply.status(201).send({ token: token });
  } catch (e) {
    console.log(e);
    throw new Error("failed create user");
  }
};

export default { createUser };
