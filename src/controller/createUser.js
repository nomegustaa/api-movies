import ServiceCreateUser from "../service/createUser.js";
import ServicelistUsers from "../service/listUsers.js";
import { BCRYPT_AMOUNT } from "../config/env.js";
import validEmail from "../helpers/validEmail.js";
import bcrypt from "bcrypt";
import validCampVoid from "../helpers/vaidCampVoid.js";

const createUser = async (request, reply) => {
  const { nameUser, emailUser, passwordUser, avatar } = request.body;

  try {
    if (validCampVoid(nameUser, emailUser, passwordUser, avatar)) {
      return reply.status(400).send({ message: "Missing parameters" });
    }

    const validEmailExisting = await ServicelistUsers.listUser();

    if (!validEmail(emailUser)) {
      return reply.status(400).send({ message: "email invalid" });
    }
    if (validEmailExisting.some((userEmail) => userEmail.email === emailUser)) {
      return reply.status(400).send({ message: "email already exists" });
    }

    const passwordHash = await bcrypt.hash(passwordUser, Number(BCRYPT_AMOUNT));

    await ServiceCreateUser.createUser(
      nameUser,
      emailUser,
      passwordHash,
      avatar
    );
    return reply.status(201).send({ message: "user created successfully" });
  } catch (e) {
    console.log(e);
    throw new Error("failed create user");
  }
};

export default { createUser };
