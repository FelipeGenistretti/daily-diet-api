import type { UserRepositoryInterface } from "../repositories/contracts/UserRepositoryInterface.js";
import { compare } from "bcrypt";

export class LoginUserService {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(password: string, email: string) {
    const user = await this.userRepository.findByMail(email); 

    if (!user) {
      throw new Error("Não existe nenhum usuário com este email");
    }

    const isPasswordCheck = await this.comparePassword(password, user.password);

    if (!isPasswordCheck) {
      throw new Error("Senha inválida");
    }

    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  private async comparePassword(password: string, userPassword: string) {
    return compare(password, userPassword);
  }
}
