const sendSuccessReply = (reply, message) => {
  return reply.status(201).send({ message });
};

const sendErrorReply = (reply, statusCode, message) => {
  return reply.status(statusCode).send({ message });
};

export default { sendSuccessReply, sendErrorReply };
