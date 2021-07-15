import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../../models/User';

import SendMailService from '../../services/emails/SendMailService';

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const usersRepository = getRepository(User);
    const someUser = await usersRepository.findOne({
      email: email
    });

    if(someUser) {
      return response.status(400).json({
        error: "User already exists"
      });
    }

    const user = usersRepository.create({
      email: email,
      name: name,
    });
    await usersRepository.save(user);

    // Envio de emails de confirmação
    await SendMailService.execute(email, "Confirmação de conta", "Confirme sua conta");

    return response.status(201).json(user);
  }
}

export { UserController }