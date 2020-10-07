//Exercício 2

import { validateCharacter, performAttack2, Character } from "../src/index";

describe("Should return false for incorrect inputs", () => {
 //a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "".  
  test("Should return false for character name empty", () => {
    const character = {
      name: "",
      life: 1500,
      defense: 1000,
      strength: 600,
    };

    const result = validateCharacter(character);
    expect(result).toBe(false);
  });

  //b. Crie um teste que verifique o comportamento da função com um personagem com a vida vazia, isto é, undefined
  test("Should return false for life 0", () => {
      const result = validateCharacter({
        name: "Scorpion",
        life: 0,
        strength: 300,
        defense: 500,
      });
  
      expect(result).toBe(false);
    })

  //c. Crie um teste que verifique o comportamento da função com um personagem com a força vazia, isto é, undefined
  test("Should return false for strength 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1000,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  })

  // d. Crie um teste que verifique o comportamento da função com um personagem com a defesa vazia, isto é,  undefined
  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1000,
      strength: 500,
      defense: 0,
    });

    expect(result).toBe(false);
  })

  //e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
  test("Should return false for negative numbers for life, defense or strength", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1000,
      strength: 500,
      defense: -500,
    });

    expect(result).toBe(false);
  })

  //f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas
  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1000,
      strength: 500,
      defense: 500,
    });

    expect(result).toBe(true);
  })

  describe("Exercicio 4", () => {
    test("success", () => {
      const validatorMock = jest.fn(() => true);
      expect(validatorMock()).toBe(true);
    });
  
    test("error", () => {
      const validatorMock = jest.fn(() => false);
      expect(validatorMock()).toBe(false);
    });
  });

  describe("Testing performAtack", () => {

    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };
    
        performAttack2(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });  
})
test("Should return invalid character error", () => {
  expect.assertions(4);
  const validatorMock = jest.fn(() => {
    return false;
  });

  const attacker: Character = {
    name: "Scorpion",
    life: 1500,
    defense: 200,
    strength: 600,
  };

  const defender: Character = {
    name: "Kitana",
    life: 1500,
    defense: 400,
    strength: 800,
  };

  try {
    performAttack2(attacker, defender, validatorMock as any);
  } catch (err) {
    expect(err.message).toBe("Invalid character");
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(1);
    expect(validatorMock).toHaveReturnedTimes(1);
  }
});
})
