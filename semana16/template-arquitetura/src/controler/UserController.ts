import { Request, Response } from 'express';
import UserBusiness from '../business/UserBusiness';
import { BaseDatabase } from '../data/BaseDatabase';

export default class UserController {
  async signup(req: Request, res: Response) {
    const userBusiness = new UserBusiness();

    try {
      const input = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role,
      };

      const token = await userBusiness.createUser(input);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async login(req: Request, res: Response) {
    try {
      const loginData = {
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      const token = await userBusiness.getUserByEmail(loginData);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  async get(req: Request, res: Response) {
    const userBusiness = new UserBusiness();

    try {
      const token = req.headers.authorization!;
      const users = await userBusiness.get(token);

      res.send(users).status(200);
    } catch (error) {
      res.send({ message: error.message }).status(error.status);
    }
  }

  async deleteUser(req: Request, res: Response) {
    const userBusiness = new UserBusiness();

    try {
      const input = {
        id: req.params.id,
        token: req.headers.authorization!,
      };

      await userBusiness.deleteUser(input);

      res.status(200).send({ message: 'Usuário apagado com sucesso' });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
