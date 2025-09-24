import type { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController.js";

const authController = new AuthController();

async function appRoutes(app: FastifyInstance) {
    app.post("/login", authController.login);
    app.get("/teste", authController.teste); 
}


export { appRoutes }