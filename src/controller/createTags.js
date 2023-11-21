import validCampVoid from "../helpers/vaidCampVoid.js";
import serviceCreateTag from "../service/createTags.js";

const createTag = async (request, reply) => {
  const { tag, idUser } = request.body;
  const note_id = request.params.id;

  try {
    if (validCampVoid(tag, note_id, idUser)) {
      return reply.status(400).send({ message: "Missing parameters" });
    }

    await serviceCreateTag.createMovieTags(note_id, idUser, tag);
    return reply.status(201).send({ message: "tag created successfully" });
  } catch (e) {
    console.log(e);
    throw new Error("failed to create tag");
  }
};

export default { createTag };
