//Exercicio 1

/*let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)*/
//R - A) O código soma o valor de i a adição, sendo que o i inicial é 0. A soma só irá parar quando o i for 14 (i<15), ou seja, ela irá somar até o valor x + 14
//R - B) 105
//R - C) 

//Exercicio 2
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)*/

//A) O comando push adciona o item inspecionado a uma nova lista caso o item esteja de acordo com as condições propostas (item%numero === 0)
//B) [10, 15, 25, 30]
//C) Valor de 3 = [ 12, 15, 18, 21, 27, 30 ]
//Valor de 4 = [ 12 ]



//Exercicio 3

//A)
/*let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maxNumeroAtual = array[0]
let minNumeroAtual = array[0]

for (let numero of array) 
{
    if (numero > maxNumeroAtual) 
    {
        maxNumeroAtual = numero
    }
        for (let numero1 of array) 
        {
            if (numero < minNumeroAtual) 
            {
                minNumeroAtual = numero
            }
        }

    
}

console.log(`O maior número é ${maxNumeroAtual} e o menor é ${minNumeroAtual}`)
A) O maior número é 130 e o menor é 21*/

//B) 
/*let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []
for ( let resultado of array) {
    novoArray.push (resultado / 10)
}
console.log(novoArray)
B) [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5] */


// C) 
/*let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let pares = []

for ( let resultado of array) {
    if (resultado % 2 === 0) 
    pares.push (resultado) 
}
console.log(pares)*/
//C) [80, 30, 130, 40, 60, 70, 120, 90, 110]











/*// Resposta item c.
[80, 30, 130, 40, 60, 70, 120, 90, 110] 

// Resposta item d.
[ 'O elemento do índex 0 é 80',
  'O elemento do índex 1 é 30',
  'O elemento do índex 2 é 130',
  'O elemento do índex 3 é 40',
  'O elemento do índex 4 é 60',
  'O elemento do índex 5 é 21',
  'O elemento do índex 6 é 70',
  'O elemento do índex 7 é 120',
  'O elemento do índex 8 é 90',
  'O elemento do índex 9 é 103',
  'O elemento do índex 10 é 110',
  'O elemento do índex 11 é 55' ]*/