//Exercicio 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)  // a.  false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado) // b.  false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado) // c.  true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado) // d.  false

console.log("e. ", typeof resultado) // e.  undefined



//Exercicio 2
let array
console.log('I. ', array) // I.  undefined

array = null
console.log('II. ', array) // II.  null


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length) // III.  11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1]) // IV.  3  e  4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor) //V.  19  e  9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i]) // VI.  3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC) // VII.  1

/* a. O que é array e como se declara em JS?
R - é uma maneira para guardar mais de uma informação na mesma variável. let array [x, x, x]

b. Qual o index inicial de um array?
R - array[]

c. Como se determinar o tamanho do array?
R - Através do .length
ex: let array = [1, "diego", 3, 4]
let tamanhoDoArray = array.length
console.log(tamanhoDoArray)

d. Indique todas as mensagens impressas no console.
R - I.  undefined
    II.  null
    III.  11
    IV.  3  e  4
    V.  19  e  9
    VI.  3
    VII.  1 

*/

   
//Exercicio de escrita de código 

// 1- a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// R - 298.15 "K"
let fahrenheitParaKelvin1 = (((77 - 32)*5/9) + 273.15)
console.log(fahrenheitParaKelvin1, "K");

// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
// R - 176 "°F"
let celciusParaFahrenheit1 = ((80*(9/5)) + 32)
console.log(celciusParaFahrenheit1, "°F");

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
// R - 86 "°F" 303.15 "K"
let celciusParaFahrenheit2 = ((30*(9/5)) + 32)
let celciusParaKelvin2 =  (((celciusParaFahrenheit2 - 32)*5/9) + 273.15)
console.log(celciusParaFahrenheit2, "°F", celciusParaKelvin2, "K")

// d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
const celcius = prompt("Digite um valor em °c, esse valor será convertido em °F e K ")
let celciusParaFahrenheit3 = ((celcius*(9/5)) + 32)
let celciusParaKelvin3 =  (((celciusParaFahrenheit3 - 32)*5/9) + 273.15)
console.log(celciusParaFahrenheit3, "°F", celciusParaKelvin3, "K")

// 2 - Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte).
const pergunta1 = "Qual seu nome Completo?"
const nomeCompleto = prompt(pergunta1)
console.log("1. ", pergunta1)
console.log("Resposta:", nomeCompleto)

const pergunta2 = "Qual sua banda preferida?"
const bandaPreferida = prompt (pergunta2)
console.log("2. ", pergunta2)
console.log("Resposta: Minha banda preferida é", bandaPreferida)

const pergunta3 = "Qual sua música preferida?"
const musicaPreferida = prompt (pergunta3)
console.log("3. ", pergunta3)
console.log("Resposta: Minha música preferida é", musicaPreferida)

const pergunta4 = "Qual seu esporte preferido?"
const esportePreferido = prompt (pergunta4)
console.log("4. ", pergunta4)
console.log("Resposta: Meu esporte preferido é", esportePreferido)

const pergunta5 = "Qual sua comida preferida?"
const comidaPreferida = prompt (pergunta5)
console.log("5. ", pergunta5)
console.log("Resposta: Minha comida preferida é", comidaPreferida)

// 3 - Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

// a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
let quilowatthora1 = (280 * 0.05)
console.log("O valor a ser pago é de R$", quilowatthora1);
//O valor a ser pago é de R$ 14 

// b. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.
let quilowatthora2 = (280 * 0.05)
let desconto = (quilowatthora2 - (quilowatthora2 * 0.15))
console.log("O valor a ser pago é de R$", quilowatthora2)
console.log("valor com desconto: R$", desconto) 

//Desafios:

//a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// R -  20lb equivalem a 9.071940488070398 kg
let libraParaQuilograma = (20/2.2046)
console.log("20lb equivalem a", libraParaQuilograma, "kg");

//b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// R - 10.5oz equivalem a 0.29766967171287634 kg
let oncaParaQuilograma = (10.5/35.274)
console.log("10.5oz equivalem a", oncaParaQuilograma, "kg");  

//c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// R - 100mi equivalem a 160900 m
let milhasParaMetros= (100 * 1609)
console.log("100mi equivalem a", milhasParaMetros, "m"); 

//d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// R - 50ft equivalem a 15.239256324291373 m
let pesParaMetros= (50 / 3.281)
console.log("50ft equivalem a", pesParaMetros, "m"); 

//e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// R - 103.56gal equivalem a 27.360634081902244 l
let galParaLitros= (103.56 / 3.785)
console.log("103.56gal equivalem a", galParaLitros, "l"); 

//f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// R - 450xic equivalem a 106.47 l
let xicarasParaLitros= (450 * 0.2366)
console.log("450xic equivalem a", xicarasParaLitros, "l"); 

//g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter. 
const valorEmGaloes = prompt("Forneça o valor em galões para convertermos para litros")
let galParaLitros1= (valorEmGaloes / 3.785)
console.log(valorEmGaloes, "galões equivalem a", galParaLitros1, "l");