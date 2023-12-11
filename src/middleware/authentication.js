import { SECRET_KEY } from "../config/env.js";
import jwt from "jsonwebtoken";

const authentication = (request, reply, done) => {
  const url = request.url;

  if (url === "/createUser" || url === "/loginUser") {
    return done();
  }

  const token = request.headers.authorization;

  console.log(token);
  if (!token) {
    reply.status(401).send({ message: "token not provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return reply.status(403).send({ message: "token invalid" });
    }
    request.user = user;
    done();
  });
};

export default { authentication };
