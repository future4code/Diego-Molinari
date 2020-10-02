import { UserDatabase } from '../data/UserDatabase';
import { LoginInputDTO, User } from '../model/User';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export class UserBusiness {
  public async signup(
    name: string,
    email: string,
    password: string,
    role: string,
  ): Promise<string> {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDatabase = new UserDatabase();
    await userDatabase.signup(id, name, email, password, role);
    return id;
  }

  public async getUserByEmail(input: LoginInputDTO) {
    const userDatabase = new UserDatabase();
    const user: User = await userDatabase.getUserByEmail(input.email)

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(input.password, user.getPassword())

    if (!hashCompare){
        throw new Error ("Invalid password");
    } 
    return user;






  }
}

/* export class UserBusiness {
  async createUser(user: UserInputDTO) {
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(user.password);

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(
      id,
      user.email,
      user.name,
      hashPassword,
      user.role,
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({ id, role: user.role });

    return accessToken;
  }

  async getUserByEmail(user: LoginInputDTO) {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.getPassword(),
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({
      id: userFromDB.getId(),
      role: userFromDB.getRole(),
    });

    if (!hashCompare) {
      throw new Error('Invalid Password!');
    }

    return accessToken;
  }
} */
