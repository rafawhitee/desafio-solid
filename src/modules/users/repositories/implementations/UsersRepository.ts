import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    let novoUser: User = new User();
    Object.assign(novoUser, { name, email, created_at: new Date(), updated_at: new Date() })
    this.users.push(novoUser);
    return novoUser;
  }

  findById(id: string): User | undefined {
    let user: User | undefined = this.users.find(u => u.id === id);
    return user;
  }

  findByEmail(email: string): User | undefined {
    let user: User | undefined = this.users.find(u => u.email === email);
    return user;
  }

  turnAdmin(receivedUser: User): User {
    let novaList: User[] = this.users.filter(u => u.id !== receivedUser.id);
    receivedUser.admin = true;
    novaList.push(receivedUser);
    this.users = novaList;
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };