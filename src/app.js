import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import Routes from "./routes/routes.js";
import { DB_PORT } from "./config/env.js";

const app = Fastify({ logger: true });

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  credentials: true,
  allowedHeaders: ["Authorization", "Content-Type", "x-custom-header"],
});

app.register(Routes);

const start = async () => {
  try {
    await app.listen({ port: DB_PORT });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
