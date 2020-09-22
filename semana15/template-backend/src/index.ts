import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';

import GenerateId from './services/GenerateId';
import { UserDatabase } from './data/UserDatabase';
import { Authenticator } from './services/Token';

const app = express();
app.use(express.json());
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post('/signup', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || email.indexOf('@') === -1) {
      throw new Error('Email invalido.');
    }
    if (!password || password.length < 6) {
      throw new Error('Senha inválida.');
    }

    const generateId: GenerateId = new GenerateId();
    const id = generateId.execute();

    const userDb: UserDatabase = new UserDatabase();
    userDb.createUser(id, email, password);

    const authenticator: Authenticator = new Authenticator();
    const token = authenticator.generateToken(id);

    res.status(200).send({
      message: 'Usuário criado com sucesso',
      token: token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

app.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || email.indexOf('@') === -1) {
      throw new Error('Email inválido.');
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserByiD(email);

    if (user.password !== password) {
      throw new Error('Senha inválido.');
    }

    const authenticator: Authenticator = new Authenticator();
    const token = authenticator.generateToken(user.id);

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get('/user/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authData = authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authData.id);

    res.status(200).send({
      user,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
