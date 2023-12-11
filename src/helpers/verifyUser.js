import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

const verifyUser = (token, request, reply) => {
  const user = jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return reply.status(403).send({ message: "token invalid" });
    }
    return (request.user = user);
  });
  return user;
};

export default { verifyUser };
