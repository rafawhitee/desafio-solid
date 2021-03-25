import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    let user: User | undefined = this.usersRepository.findById(user_id);
    if (user) {
      if (user.admin) {
        return this.usersRepository.list();
      }
      throw new Error("Only admin can get list users");
    }
    throw new Error("Only registered users can get list users");
  }
}

export { ListAllUsersUseCase };
