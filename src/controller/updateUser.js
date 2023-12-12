import { compare, hash } from "bcrypt";
import ServiceListUsers from "../service/listUsers.js";
import ServiceUpdateUser from "../service/updateUser.js";
import { BCRYPT_AMOUNT, SECRET_KEY } from "../config/env.js";
import responseHandler from "../helpers/responseHandler.js";
import jwt from "jsonwebtoken";

const updateUser = async (request, reply) => {
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);
  const { nameUser, emailUser, passwordUser, old_password } = request.body;
  const user = await ServiceListUsers.listUser();

  const verifyUser = user.find((User) => User.id === idUser);

  if (!verifyUser) {
    return responseHandler.sendErrorReply(reply, 400, "user not found");
  }

  const verifyEmail = user.find((User) => User.email === emailUser);

  if (verifyUser && verifyEmail) {
    return responseHandler.sendErrorReply(
      reply,
      400,
      "email is already in use"
    );
  }

  if (passwordUser && !old_password) {
    return responseHandler.sendErrorReply(reply, 400, "enter the old password");
  }

  if (passwordUser && old_password) {
    const checkedPasswordHash = await compare(
      old_password,
      verifyUser.password
    );

    if (!checkedPasswordHash) {
      return responseHandler.sendErrorReply(
        reply,
        400,
        "old password doesn't match"
      );
    }
    verifyUser.password = await hash(passwordUser, Number(BCRYPT_AMOUNT));
  }

  verifyUser.name = nameUser ? nameUser : verifyUser.name;
  verifyUser.email = emailUser ? emailUser : verifyUser.email;
  await ServiceUpdateUser.updateUser(
    verifyUser.name,
    verifyUser.email,
    verifyUser.password,
    verifyUser.avatar,
    idUser
  );
  return responseHandler.sendSuccessReply(reply, "user updated successfully");
};

export default { updateUser };
