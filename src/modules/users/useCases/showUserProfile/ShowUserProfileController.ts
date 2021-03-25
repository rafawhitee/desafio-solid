import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    let user: User | undefined = this.showUserProfileUseCase.execute({ user_id });
    if (user) {
      return response.json(user);
    }
    return response.status(404).send();
  }
}

export { ShowUserProfileController };