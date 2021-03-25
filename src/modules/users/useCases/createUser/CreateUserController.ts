import { Response, Request } from "express";
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      let user: User = this.createUserUseCase.execute({ name, email });
      if (user) {
        return response.status(201).json(user)
      }
      return response.status(400).json({ error: "Bad Request" })
    } catch (err) {
      return response.status(400).json({ error: "Bad Request" })
    }
  }
}

export { CreateUserController };