import type { User } from "@prisma/client";
import type { LoginUserResponse } from "../../dtos/user/LoginUser.js";

export interface UserRepositoryInterface {
    findById(id: number): Promise<User | null >;
    findByMail(email:string) : Promise<User | null>
    createUser(name:string, email:string, password:string): Promise<User | null>
}
