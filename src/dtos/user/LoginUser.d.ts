import { User } from "@prisma/client"


interface LoginUserRequest{
    name:string
    email:string
}

interface LoginUserResponse {
    user:User
}