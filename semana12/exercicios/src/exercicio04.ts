//Exercicio 4A.
type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: 'Charmander',
  types: 'Fire',
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: 'Bulbasaur',
  types: 'Grass/Poison',
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: 'Squirtle',
  types: 'Water',
  healthPoints: 35,
};

//tsc exercicio04.ts

//Exercicio4B.
//fora da pasta src, o comando deve ser realizado com indicação do arquivo que será transpilado.
//Dentro de uma pasta src, o comand tsc pode ser dado na pasta raiz

//Exercicio4C.
//o tsc sem parametros ou com varios parametros pode transpilar varios arquivos juntos
