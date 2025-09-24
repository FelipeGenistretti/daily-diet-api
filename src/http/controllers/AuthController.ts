import type { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { makeUserLoginService } from "../../factories/MakeUserLoginService.js";

class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
      password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
      email: z.string().email({ message: "É necessário um e-mail válido" }),
    });

    try {
      const { password, email } = await bodySchema.parseAsync(request.body);
      
      const userLoginService = makeUserLoginService();
      const user = await userLoginService.execute(password, email);

      return reply.status(200).send({ user });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({
          message: error.issues[0]?.message,
        });
      }

      return reply.status(500).send({
        message: (error as Error).message || "Erro interno no servidor",
      });
    }
  }

  teste(_: FastifyRequest, reply: FastifyReply) {
    return reply.send({ message: "server is running" });
  }
}

export { AuthController };
