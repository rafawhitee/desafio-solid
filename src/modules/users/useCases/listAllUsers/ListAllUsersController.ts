import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let users: User[] = this.listAllUsersUseCase.execute({ user_id });
    return response.json(users);
  }
}

export { ListAllUsersController };