import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";
import ServiceCreateAvatar from "../service/createAvatar.js";
import responseHandler from "../helpers/responseHandler.js";

const createAvatar = async (request, reply) => {
  const { base64 } = request.body;
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);

  try {
    const base64String = base64.split(",")[1];
    await ServiceCreateAvatar.createAvatar(base64String, idUser);

    return responseHandler.sendSuccessReply(
      reply,
      "avatar created successfully"
    );
  } catch (e) {
    console.log("error insert avatar", e);
  }
};

export default { createAvatar };
