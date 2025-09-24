import fastify from "fastify";
import { appRoutes } from "./http/routes/routes.js";

export const app = fastify()

app.register(appRoutes)