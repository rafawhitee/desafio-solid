import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      let user: User | undefined = this.turnUserAdminUseCase.execute({ user_id })
      if (user) {
        return response.json(user);
      }
      return response.status(404).json({ error: "user not found" });
    } catch (err) {
      return response.status(404).json({ error: err })
    }
  }
}

export { TurnUserAdminController };