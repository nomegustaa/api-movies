import ServiceListUsers from "../service/listUsers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

const loginUser = async (request, reply) => {
  const { emailUser, passwordUser } = request.body;
  try {
    const Users = await ServiceListUsers.listUser();
    const infoUser = Users.find((userEmail) => userEmail.email === emailUser);

    if (!infoUser) {
      return reply.status(400).send({ message: "email not registered" });
    }

    const passwordHash = await bcrypt.compare(passwordUser, infoUser.password);

    if (!passwordHash) {
      reply.status(401).send({ message: "password invalid" });
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
