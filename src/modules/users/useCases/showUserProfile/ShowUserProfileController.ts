import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      let user: User | undefined = this.showUserProfileUseCase.execute({ user_id });
      if (user) {
        return response.status(200).json(user);
      }
      return response.status(404).json({ error: "ocorreu um erro" });
    } catch (err) {
      return response.status(404).json({ error: "ocorreu um erro" });
    }
  }
}

export { ShowUserProfileController };