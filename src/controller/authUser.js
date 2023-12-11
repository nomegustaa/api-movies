import decodeToken from "../helpers/verifyUser.js";
import ServiceListUserById from "../service/listUsersById.js";

const authUser = async (request, reply) => {
  try {
    const token = request.headers.authorization;
    if (!token) {
      reply.status(401).send({ message: "token not provided" });
    }

    const { idUser } = decodeToken.verifyUser(token, request, reply);

    const user = await ServiceListUserById.listUserById(idUser);

    reply.status(201).send({ user: user[0] });
  } catch (err) {
    console.log("error ", err);
  }
};

export default { authUser };
