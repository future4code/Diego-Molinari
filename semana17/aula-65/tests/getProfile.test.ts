import { UserBusiness } from '../src/business/UserBusiness';
import { stringToUserRole, User, UserRole } from '../src/model/User';

describe('Testing UserBusiness.getProfile', () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Returns user not found if user does not exist", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          'id',
          'Astrodev',
          'astrodev@gmail.com',
          'hash',
          stringToUserRole('NORMAL'),
        ),
    );

    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any,
    );

    const user = await userBusiness.getProfile('id');

    expect(getUserById).toHaveBeenCalledWith('id');
    expect(user).toEqual({
      id: 'id',
      name: 'Astrodev',
      email: 'astrodev@gmail.com',
      role: UserRole.NORMAL,
    });
  });
  test("Returns user information if user exists", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          'id',
          'souumusuario',
          'astrodev@gmail.com',
          'hash',
          stringToUserRole('ADMIN'),
        ),
    );

    userDatabase = { getUserById };

    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any,
      );

      const user = await userBusiness.getProfile('id');
    } catch (err) {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any,
      );

      expect(err.errorCode).toBe(404);
      expect(err.message).toBe('User not found');
    }
  });
});
