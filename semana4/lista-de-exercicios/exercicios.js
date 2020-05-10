/* Exercícios de interpretação de código

1- Como o próprio nome da função deixa claro, é um programa para converter a moeda para dolar. 
O programa pede para o usuário fornecer o valor da cotação do dólar, e com isso o sistema faz a conversão para reais, 
temos uma const (meuDinheiro) que é o valor que o usuário tem em reais que será multiplicado pelo valor que o usuário inseriu no prompt. 
Após isso, é impresso no terminal uma mensagem dizendo o valor convertido "R$(valor).  

2- Temos uma função (investeDinheiro) que esta recebendo dois tipos de argumentos (tipoDeInvestimento e valor), dentro dessa função temos 
uma variável declarada (valorAposInvestimento), a função tem continuidade com uma condicional (switch) que com de acordo do tipo de investimento 
escolhido pelo usuário determinara o valor após investimento. Depois da função fechada temos duas consts na qual o usuário informa o tipo de 
investimento e o valor após isso o console.log vai printar no terminal o valores. na const novoMontante, vai ser impresso "165" já na const 
segundoMontante vai devolver um alerta informando "tipo de investimento incorreto", pois não tem Tesouro direto dentro do Switch 

3- Temos 3 arrays, um de números com vários elementos dentro e dois arrays vazios (array1 e arrey2). Apos isso temos uma condição com um calculo 
para que incluirá os números pares presentes no array numeros no array1 e o restante (numeros impares) serão incluidos no array2. 
Irá ser impresso no console uma frase com a quantidade de numeros total no array de números, e também a quantidade de numeros presentes 
no array1 e no array2 

4 - Temos um Array de números com 25 elementos dentro e duas variaveis (numero1 e numero2). Com isso o programa irá analisar o array 
de números. se o array de numeros tem um numero menor que o infinito ele irá retornar esse numero para a variavel numero1 e depois ele vai 
checar o menor numero presente no array de numeros e retornar para a variável numero2. No final do codigo o console irá printar no terminal 
os dois valores obtidos:  -10 e 1590. */

//-----------------------------------------------------------------------------------------------------------------------------------------------


/* Exercícios de Lógica de Programação*/

 /* 1 - forEach = Percorre o Array, le e reutiliza os itens do array
map = Cria um novo array com elementos modificados do original
filter = cria um novo array com alguns elementos do original
 
const flamengo = [
    { nome: "Gabigol",  tipo: "atacante",  gols: 18 },
    { nome: "Diego",  tipo: "goleiro",  gols: 0 },
    { nome: "Bruno Henrique", tipo: "atacante",   gols: 12 },
  ]
  
  const soAtacantes = flamengo.filter((jogador, index, array) => {
    if(jogador.tipo === "atacante"){
      return true 
    }
    return false
  })
  
  console.log(soAtacantes)

  2 - 
  a) false
  b) true
  c) true
  d) true
  e) true  

  3 -  O código original não funciona, para ele funcionar o "meu colega" teria que criar um função para resolver o problema matemático e após
 isso, envocar essa função dando um console.log para o resultado ser impresso na tela.


  function nPares(numero){
    const quantidadeDeNumerosPares = numero
    let i = 0
    while(i < quantidadeDeNumerosPares)
    {
        console.log( i * 2 )
        i++
    }
}
console.log(nPares(5))

4 - 

let classificaTriangulo = (x, y, z) => {
    if(x === y && y === z) {
        return "É um Triângulo Equilátero";
    } else if (x === y || y === z || x === z) {
        return "É um Triângulo Isósceles";
    } else {
        return "É um Triângulo Escaleno"
    }
}
console.log(classificaTriangulo(10, 9, 7)); 
 

 5 -    
 let identificaSeriedeParamentros = (x, y) =>{
        if(x === y){
            alert(`Os números são iguais`); 
        } else if (x > y){
            console.log (`O primeiro valor é maior que o segundo`);
            console.log (`A diferença entre eles é de ${(x - y)}`);
            if(x % y === 0) {
                console.log(`${x} é divisivel por ${y}`)
            } else {
                console.log (`${x} não é divisivel por ${y}`)
            }
        } else { 
            console.log (`O segundo valor é maior`);
            console.log(`A ddiferença entre eles é de: ${(y - x)}`)
            if(y % x ===0) {
                console.log (`${y} é divisível por ${x}`)
            } else {
                console.log(`${y} não é divisível por ${x}`)
            }
        }
            
            }
            console.log(identificaSeriedeParamentros(8,10)) */

//-----------------------------------------------------------------------------------------------------------------------------------------------







        

    

 