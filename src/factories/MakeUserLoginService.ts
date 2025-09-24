import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository.js";
import { LoginUserService } from "../services/LoginUserService.js";

function makeUserLoginService(){
    const userRepository = new PrismaUserRepository()
    const userLoginService = new LoginUserService(userRepository)

    return userLoginService
}

export { makeUserLoginService }