/* Exercícios de interpretação de código

1- Como o próprio nome da função deixa claro, é um programa para converter a moeda para dolar. 
O programa pede para o usuário fornecer o valor da cotação do dólar, e com isso o sistema faz a conversão para reais, 
temos uma const (meuDinheiro) que é o valor que o usuário tem em reais que será multiplicado pelo valor que o usuário inseriu no prompt. 
Após isso, é impresso no terminal uma mensagem dizendo o valor convertido "R$(valor).  

2- Temos uma função (investeDinheiro) que esta recebendo dois tipos de argumentos (tipoDeInvestimento e valor), dentro dessa função temos 
uma variável declarada (valorAposInvestimento), a função tem continuidade com uma condicional (switch) que com de acordo do tipo de investimento 
escolhido pelo usuário determinara o valor após investimento. Depois da função fechada temos duas consts na qual o usuário informa o tipo de 
investimento e o valor após isso o console.log vai printar no terminal o valores. na const novoMontante, vai ser impresso "165" já na const 
segundoMontante vai devolver um alerta informando "tipo de investimento incorreto", pois não tem Tesouro direto dentro do Switch */

const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283];
const array1 = [];
const array2 = [];
for(let numero of numeros) {
    if(numero % 2 === 0) {
        array1.push(numero);
    } else {
        array2.push(numero);
    }
}
console.log("Quantidade totalde números", numeros.length)
console.log(array1.length)
console.log(array2.length)