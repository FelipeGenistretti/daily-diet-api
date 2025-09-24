import { PrismaUserRepository } from "../repositories/prisma/PrismaUserRepository.js";
import { LoginUserService } from "../services/LoginUserService.js";
import { RegisterUserService } from "../services/RegisterUserService.js";

function makeUserRegisterService(){
    const userRepository = new PrismaUserRepository()
    const userRegisterService = new RegisterUserService(userRepository)

    return userRegisterService
}

export { makeUserRegisterService }