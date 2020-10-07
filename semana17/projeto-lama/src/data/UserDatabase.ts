import { BaseDatabase } from './BaseDatabase';
import { User } from '../model/User';

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LAMA_USERS';
  public async signup(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
  ) {
    try {
      await super
        .getConnection()
        .insert({
          id,
          name,
          email,
          password,
          role,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async getUserByEmail(email: string): Promise<User> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(UserDatabase.TABLE_NAME)
        .where({email});

        return User.toUserMode(result[0])


    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

/* export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = '';

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          email,
          name,
          password,
          role,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select('*')
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return User.toUserModel(result[0]);
  }
}
 */