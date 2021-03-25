import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    let user: User | undefined = this.usersRepository.findById(user_id);
    if (user && user.id) {
      user = this.usersRepository.turnAdmin(user);
      return user;
    }
    throw new Error(`${user_id} not found`);
  }
}

export { TurnUserAdminUseCase };