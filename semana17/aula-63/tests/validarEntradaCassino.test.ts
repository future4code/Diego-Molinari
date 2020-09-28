import {
  LOCATION,
  NACIONALITY,
  User,
  Casino,
  verifyAge,
} from '../src/entradasNoCassino';

//Exercicio 4
describe('Checking allowance of user entrance in Brazil and the USA', () => {
  //a. Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil
  test('1 brazilian allowed', () => {
    const brazilian: User = {
      name: 'Diego',
      age: 18,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: 'Balada Estelar',
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed).toEqual(['Diego']);
  });

  //b. Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil
  test('1 american allowed', () => {
    const american: User = {
      name: 'Jesse',
      age: 18,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: 'Balada Estelar',
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.allowed).toEqual(['Jesse']);
  });

  //c. Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos.
  test('No one allowed', () => {
    const firstAmerican: User = {
      name: 'Jesse',
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: 'Ben',
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: 'Diego',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: 'João',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: 'Wynn Las Vegas Casino',
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.unallowed).toEqual(['Jesse', 'Ben']);
    expect(result.brazilians.unallowed).toEqual(['Diego', 'João']);
  });

  //d. Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Eles querem estrar em um estabelecimento nos Estados Unidos.
  test('2 american allowed and 2 brazilians unallowed', () => {
    const firstAmerican: User = {
      name: 'Jesse',
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: 'Ben',
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: 'Diego',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: 'João',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: 'Wynn Las Vegas Casino',
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.allowed).toEqual(['Jesse', 'Ben']);
    expect(result.brazilians.unallowed).toEqual(['Diego', 'João']);
  });
});

//Exercício 5

//a. Escreva um teste que receba um usuário brasileiro que possa entrar em um estabelecimento no Brasil. Verifique que o tamanho do array allowed da propriedade brasilians tenha tamanho menor do que 2 e maior do que 0.
describe('Checking array length of the results', () => {
  test('1 brazilian allowed', () => {
    const brazilian: User = {
      name: 'Juçara',
      age: 45,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: 'Trevo da sorte',
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [brazilian]);
    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  //b. Escreva um teste que receba um usuário americano que possa entrar em um estabelecimento no Brasil.  Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0.
  test('1 brazilian allowed', () => {
    const american: User = {
      name: 'Tom',
      age: 55,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: 'Trevo da sorte',
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [american]);
    expect(result.americans.unallowed.length).toBe(0);
  });

  //c. Escreva um teste que receba dois usuários brasileiros e dois americanos. Todos devem ter a idade de 19 anos e quererem entrar em um estabelecimento nos Estados Unidos. Verifique que os arrays unallowed possuam o nome de algum dos usuários que você criou
  test('2 americans and 2 brazilians unallowed in USA', () => {
    const firstAmerican: User = {
      name: 'Jesse',
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: 'Ben',
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: 'Diego',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: 'João',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: 'Wynn Las Vegas Casino',
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.americans.unallowed).toContain('Jesse');
    expect(result.brazilians.unallowed).toContain('João');
  });

  //d. Escreva um teste que receba dois usuários brasileiros e dois americanos. Os brasileiros devem ter 19 anos e os americanos 21 anos. Verifique que o tamanho do array unallowed da propriedade brasilians tenha tamanho maior do que 1. Verifique que o tamanho do array unallowed da propriedade americans tenha tamanho menor do que 1. Verifique que o tamanho do array allowed da propriedade americans tenha tamanho igual a 2.
  test('2 americans and 2 brazilians unallowed in USA', () => {
    const firstAmerican: User = {
      name: 'Jesse',
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const secondAmerican: User = {
      name: 'Ben',
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const firstBrazilian: User = {
      name: 'Diego',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const secondBrazilian: User = {
      name: 'João',
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const users: User[] = [
      firstAmerican,
      secondAmerican,
      firstBrazilian,
      secondBrazilian,
    ];

    const casino: Casino = {
      name: 'Wynn Las Vegas Casino',
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, users);
    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });

  
});
