import type { UserRepositoryInterface } from "../contracts/UserRepositoryInterface.js";
import type { LoginUserResponse } from "../../dtos/user/LoginUser.js";
import { prisma } from "../../http/lib/prisma.js";
import type { User } from "@prisma/client";

export class PrismaUserRepository implements UserRepositoryInterface {
  async findById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user
  }

  async findByMail(email:string) : Promise<User | null>{
    const user = await prisma.user.findFirst({
        where:{
            email
        }
    })
    return user
  }

}
