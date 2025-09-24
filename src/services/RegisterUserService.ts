import { email } from "zod";
import { prisma } from "../http/lib/prisma.js";
import type { UserRepositoryInterface } from "../repositories/contracts/UserRepositoryInterface.js";
import { hash } from "bcrypt";

export class RegisterUserService {
    constructor(private userRepository:UserRepositoryInterface){}

    async execute(password:string, email:string){
        const user = await this.userRepository.findByMail(email)

        if(user){
            throw new Error("Um usuario com este email já existe.")
        }

        const hashedPassword = this.encryptPassword(password)

        
    }

    private async encryptPassword(password:string)
    {
        return hash(password, 8)
    }
}