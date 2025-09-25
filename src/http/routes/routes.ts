import type { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController.js";
import { verifyJWT } from "../../middlewares/ensure-verifyJwt.js";

const authController = new AuthController();

async function appRoutes(app: FastifyInstance) {
    app.post("/login", authController.login);
    app.post("/register", authController.register);
    app.get("/teste", authController.teste);

    app.register(async (privateRoutes: FastifyInstance)=>{
        privateRoutes.addHook("preHandler", verifyJWT);

        //rotas protegidas por auth

        //privateRoutes.get("/me", userController.me);
        //privateRoutes.get("/orders", userController.orders);
        //privateRoutes.put("/profile", userController.updateProfile);
        //privateRoutes.delete("/account", userController.deleteAccount);

    },{prefix:"/user"})
}


export { appRoutes }