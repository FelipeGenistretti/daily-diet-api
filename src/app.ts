import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env/index.js";
import { appRoutes } from "./http/routes/routes.js";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});


app.register(appRoutes);
