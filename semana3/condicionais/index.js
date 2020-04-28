//Exercício 1
/*Explique o que o código faz. Qual o teste que ele realiza? 
Para que tipos de números ele imprime no console "Passou no teste"? 
Para que tipos, a mensagem é "Não passou no teste"?
/*Resposta = O código faz com que o número digitado pelo usuário passa no teste ou não passa no teste
Ele realiza um teste verificando se a número que o usuário forneceu (respostaDoUsuario) dividido por 2 resulta em um resto igual ou diferente de zero.  
Para números pares o console imprime "passou no teste"
Para números ímpares o console imprime "Não passou no teste"*/
/*const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}*/

//Exercício 2
//O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado. Veja abaixo:
/*A - Para que serve o código acima?
R- imprimir o preço da fruta escolhida pelo cliente
B - Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
R - O preço da fruta  Maçã  é  R$  2.25
c - Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
R - Eu pagria R$35.00  pois todas as frutas citadas no enunciado da pergunta estão com letras minúsculas, isso faria com que o preço das mesmas seria de R$5.00 cada
D - Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do deafult (o break indicado pelo comentário "BREAK PARA O ITEM d.")?
R - O preço da fruta  Pêra  é  R$  5 */
/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   // break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//Exercício 3
/* Considere um usuário que digita os números 3 e 4 respectivamente. 
Qual será a mensagem do terminal? Haverá algum erro? 
Justifique usando os conceitos de bloco ou escopo.
R - A mesagem do terminal será: index.js:62 Uncaught ReferenceError: mensagem is not defined. Haverá um erro poís 
A linha de código (console.log(mensagem) pertence ao escopo pai, assim ela nao consegue ter as informações fornecidas no escopo filho, por isso da erro no terinal
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
      }
  
}

console.log(mensagem)*/

//Exercício 4
/* Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:
a. Crie um programa que receba dois números do usuário através do prompt e imprima-os na ordem decrescente. 
O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
R - Se os dois números forem iguais o resposta no terminal será "Você digitou dois números iguais"

let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")

numero1 = Number(numero1)
numero2 = Number(numero2)

if (numero1 > numero2) {
    console.log (numero1, numero2)
} else

if (numero1 < numero2) {
    console.log (numero2, numero1)
} else

if (numero1 === numero2) {
    console.log ("Você digitou dois números iguais")
}*/

/*b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem decrescente. 
O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)*/
//R - Caso o usuario digitar 3 números iguais o terminal nao imprime nada.
/*let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")
let numero3 = prompt("Digite o terceiro número:")

numero1 = Number(numero1)
numero2 = Number(numero2)
numero3 = Number(numero3)

if (numero1 > numero2 && numero2 > numero3){
  console.log(numero1, numero2, numero3)
} else if (numero1 < numero2 && numero2 < numero3){
  console.log(numero3, numero2, numero1)
} else if (numero1 > numero2 && numero2 < numero3){
  console.log(numero1, numero3, numero2)
} else if (numero1 < numero2 && numero2 > numero3){
  console.log(numero2, numero1, numero3)
}*/


/* c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais,
 mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.*/
/*let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")
let numero3 = prompt("Digite o terceiro número:")

numero1 = Number(numero1)
numero2 = Number(numero2)
numero3 = Number(numero3)

if (numero1 > numero2 && numero2 > numero3){
  console.log(numero1, numero2, numero3)
} else if (numero1 < numero2 && numero2 < numero3){
  console.log(numero3, numero2, numero1)
} else if (numero1 > numero2 && numero2 < numero3){
  console.log(numero1, numero3, numero2)
} else if (numero1 < numero2 && numero2 > numero3){
  console.log(numero2, numero1, numero3)
} if (numero1 === numero2 && numero2 === numero3){
    console.log ("digite ao menos um número diferente")
}*/

// EXERCÍCIO 5
/* a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício. (Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. Coloque este link num comentário durante a resolução deste exercício)
R - https://drive.google.com/file/d/1vm6F0tKHiFrKN5xMVR_vgZxHtRk3YtJ-/view?usp=sharing 

b - Escreva um programa que realize estas perguntas  e indique a classificação final considerada. 
As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado */

let instrucoes = prompt("Digite 1 para sim e 2 para nao, se entendeu digite a opção desejada")
let pergunta1 = prompt("É um animal?")
let pergunta2 = prompt("tem pelo?")
let pergunta3 = prompt("tem pena?")

pergunta1 = Number(pergunta1)
pergunta2 = Number(pergunta2)
pergunta3 = Number(pergunta3)

if (pergunta1 == 1 && pergunta2 == 1 && pergunta3 == 1) {
    console.log("é uma ave")
} else {
    console.log("Nem pode =(")
}