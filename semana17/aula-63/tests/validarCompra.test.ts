 //Exercício 2

import { User, purchase } from '../src/validaCompra';

describe('Testing balance', () => {
  //a. Faça um teste com um usuário com o saldo maior do que o valor de compra
  test('Testing balance greater than value', () => {
    const user: User = {
      name: 'Diego',
      balance: 1000,
    };

    const result = purchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 950,
    });
  });

  //b. Faça um teste com um usuário com o saldo igual ao valor de compra
  test('Testing balance equal value', () => {
    const user: User = {
      name: 'Diane',
      balance: 600,
    };

    const result = purchase(user, 600);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  //c. Faça um teste com um usuário com o saldo menor do que o valor de compra
  test('Test balance smaller than value', () => {
    const user: User = {
      name: 'Diogo',
      balance: 30,
    };
    const result = purchase(user, 50);
    expect(result).toEqual(undefined);
  });
});

