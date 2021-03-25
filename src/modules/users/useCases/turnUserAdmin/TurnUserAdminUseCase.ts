import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    let user: User = this.usersRepository.findById(user_id);
    if (user) {
      user = this.usersRepository.turnAdmin(user);
      return user;
    }
    return null;
  }
}

export { TurnUserAdminUseCase };