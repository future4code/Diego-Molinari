//Exercicio 1 - finalizado
/* a) [0]
b) [0, 1, 0, 1, 2, 3]
c) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5] */



//Exercicio 2 - finalizado
/* a) as saídas impressas no console são: 0, 2, undefined
isso porque a função esta conferindo se o numero do array é igual ao nome, exemplo: 
A posição zero do array é igual ao nome do elemento que aparece na posição zero dentro do array? 
se sim, imprime o numero da posição, no caso no imprimei o numero "3" porque na chamada estava Paula e não paulinha.

b) Sim funcionária. Ex: 
let arrayDeNomes = [0, 1, 2, 3, 4];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
}

console.log(funcao(arrayDeNomes, 0));
console.log(funcao(arrayDeNomes, 1));
console.log(funcao(arrayDeNomes, 2)); */


//Exercicio 3 
/* A função recebe um array e tambem tem três variávies, uma é a soma dos valores do array, outra 
é a multiplicação dos valores do array e a última é um array final que é retornado pela função.
Sugiro um nome de: somaEMultiplicaArray */


//Exercicio 4 - Finalizada
/* a) A função deve receber um número correspondente aos "anos humanos" que um cachorro tem e calcular a "idade de cachorro" dele. 
Considere que 1 ano humano equivale a 7 anos de cachorro

function decobreIdadeCanina(IdadeHumana) {
  const soma = 7 * IdadeHumana;
  return soma
}
console.log(decobreIdadeCanina(10)); */


/* b) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
o nome (string), a idade (number), o endereço (string) e um boolean que representa se é estudante ou não. 
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e [SOU/NÃO SOU] estudante.

function informaDados(nome, idade, endereco, estudante)
{
  let estudoOuNao
  if (estudante === true)
  {
    estudoOuNao = "sou"
  }
    else if (estudoOuNao === false)
  {
    estudoOuNao = "não sou"
  } 
  let mensagem = "eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + estudoOuNao + " estudante"
  return mensagem 
}
console.log(informaDados("Diego", 30, "Rua Geral Oliveira", true)) */



// Exercicio 5 
/*
function anoEmSeculo(ano) {
  let seculo = ""
  if (ano > 900 && ano <= 1000) {
      seculo = "X"
  } else if (ano > 1000 && ano <= 1100) {
      seculo = "XI"
  } else if (ano > 1100 && ano <= 1200) {
      seculo = "XII"
  } else if (ano > 1200 && ano <= 1300) {
      seculo = "XIII"
  } else if (ano > 1300 && ano <= 1400) {
      seculo = "XIV"
  } else if (ano > 1400 && ano <= 1500) {
      seculo = "XV"
  } else if (ano > 1500 && ano <= 1600) {
      seculo = "XVI"
  } else if (ano > 1600 && ano <= 1700) {
      seculo = "XVII"
  } else if (ano > 1700 && ano <= 1800) {
      seculo = "XVIII"
  } else if (ano > 1800 && ano <= 1900) {
      seculo = "XIX"
  } else if (ano > 1900 && ano <= 2000) {
      seculo = "XX"
  } else if (ano > 2000 && ano <= 2100) {
      seculo = "XXI"
  }
  return `O ano ${ano} pertence ao século ${seculo}`
}
console.log(anoEmSeculo(2020))*/


// Exercicio 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

/* a)
let resultaQuantidade = (array) => array.length
console.log(resultaQuantidade(array)) */

/* b)
function verificarParidade(valor) 
{
  if (valor % 2 === 0) 
  {
    return true
  } 
  else 
  {
    return false
  }
}
 numero = 16
if (verificarParidade(numero) === true) 
  {
  console.log(`o numero ${numero} é par`)
  } 
  else 
  {
  console.log(`o numero ${numero}  é impar`)
  } */  

/* c)
function contaQuantidadePar(numero) 
{
  let total = 0
  for (let constante of numero) 
  {
    if (constante % 2 === 0) 
    {
      total++
    }
  }
    return total
}
valor = console.log("A quantidade de números pares é: " + contaQuantidadePar(array)) */
 
 

  