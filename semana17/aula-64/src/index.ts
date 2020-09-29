//Exercício 1

//a. Crie uma interface para representar os personagens
export interface Character {
  name: string;
  life: number;
  defense: number;
  strength: number;
}

//b. Crie uma função validateCharacter que valide as informações de um personagem (devolvendo true se for válida ou false caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};

//3.a Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação

export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life - attacker.strength - defender.defense;
  }
};

//3.b
export const performAttack2 = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

// c. A principal diferença é que na segunda função o validator vai nos parâmetros, ao invés de estar dentro da função.
