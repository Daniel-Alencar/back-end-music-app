import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class ConfirmationController {
  async execute(request: Request, response: Response) {
    const { user_id } = request.query;

    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({
      id: String(user_id)
    });

    if(!user) {
      return response.status(400).json({
        error: "User does not exists"
      });
    }

    user.confirmed = true;
    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { ConfirmationController }