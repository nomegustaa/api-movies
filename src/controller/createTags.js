import serviceCreateTag from "../service/createTags.js";
import responseHandle from "../helpers/responseHandler.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

const createTag = async (request, reply) => {
  const { tag } = request.body;
  const note_id = request.params.id;
  const token = request.headers.authorization;
  const { idUser } = jwt.decode(token, SECRET_KEY);

  if (!tag || !note_id) {
    return responseHandle.sendErrorReply(reply, 400, "Missing parameters");
  }
  try {
    await serviceCreateTag.createMovieTags(note_id, idUser, tag);
    return responseHandle.sendSuccessReply(reply, "Tag created successfully");
  } catch (e) {
    console.log(e);
    throw new Error("failed to create tag");
  }
};

export default { createTag };
