// Exercicios 1A.

//let minhaString: string = 01;
//console.log(minhaString);

//Resposta
//Erro de copilação do código
// Type 'number' is not assignable to type 'string'.

// Exercicio 1B.
let meuNumero: number | string;
meuNumero = 4;
console.log(meuNumero);

// Exercicio 1C.
type pessoa = {
  nome: string;
  idade: number;
  corFavorita: CORES_DO_ARCO_IRIS;
};

// Exercicio 1D.

enum CORES_DO_ARCO_IRIS {
  VERMELHO = 'Vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  ANIL = 'anil',
  VIOLETA = 'violeta',
}

const pessoa_1: pessoa = {
  nome: 'Diego',
  idade: 30,
  corFavorita: CORES_DO_ARCO_IRIS.AZUL,
};

const pessoa_2: pessoa = {
  nome: 'João',
  idade: 35,
  corFavorita: CORES_DO_ARCO_IRIS.VERDE,
};

const pessoa_3: pessoa = {
  nome: 'Maria',
  idade: 28,
  corFavorita: CORES_DO_ARCO_IRIS.VERMELHO,
};

console.log(pessoa_1);
console.log(pessoa_2);
console.log(pessoa_3);
