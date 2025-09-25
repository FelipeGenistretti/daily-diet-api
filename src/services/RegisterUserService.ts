import { hash } from "bcrypt";
import jwt from "jsonwebtoken"; 
import { env } from "../env/index.js";
import type { UserRepositoryInterface } from "../repositories/contracts/UserRepositoryInterface.js";

export class RegisterUserService {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(name: string, email: string, password: string) {
        const existingUser = await this.userRepository.findByMail(email);
        if (existingUser) {
            throw new Error("Um usuário com este email já existe.");
        }

        const hashedPassword = await this.encryptPassword(password);

        const newUser = await this.userRepository.createUser(name, email, hashedPassword);

        const token = jwt.sign(
            {},
            env.JWT_SECRET,
            {
                subject: String(newUser.id),
                expiresIn: "1h"
            }
        );

        const { password: _, ...userWithoutPassword } = newUser;

        return {
            user: userWithoutPassword,
            token
        };
    }

    private async encryptPassword(password: string) {
        return hash(password, 8);
    }
}
