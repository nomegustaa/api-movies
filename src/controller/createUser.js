import ServiceCreateUser from "../service/createUser.js";
import ServicelistUsers from "../service/listUsers.js";
import { BCRYPT_AMOUNT } from "../config/env.js";

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

    await ServiceCreateUser.createUser(nameUser, emailUser, passwordHash);
    return responseHandler.sendSuccessReply(reply, "user created successfully");
  } catch (e) {
    console.log(e);
    throw new Error("failed create user");
  }
};

export default { createUser };
