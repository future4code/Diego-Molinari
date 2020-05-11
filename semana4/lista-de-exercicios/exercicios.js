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

// Exercícios de Funções //

/* 1 -  */
// ixi batendo a cabeça nesse exercício 1

/* 2 -  
let funcaoNaoNomeada = function(texto) {
    alert(texto);
}
funcaoNaoNomeada("Hello Future4");
*/

//-----------------------------------------------------------------------------------------------------------------------------------------------

// Exercícios de Objetos //
/*1 - Arrays podem ser considerados grupos que guardam informações que podem ser acessadas a posteriori, já objetos são 
estruturas que guardam um grande volume de informações que podem ser mais complexas. os objetos possuem estrutura de chaves e valores que 
permitem identificar as variaveis

2 -  

function criaRetangulo(lado1, lado2) {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }
    return retangulo
}
console.log(criaRetangulo(5, 8))


3 - 

const meuFilmeFavorito = {
    titulo: "Clube da Luta",
    ano: 1999,
    diretor: "David Fincher",
    atores: ["Edward Norton", "Brad Pitt ", "Helena Bonham Carter ", "Meat Loaf ", "Zach Grenier ", "Rachel Singer " ],
}
console.log (`Venha assistir ao filme ${meuFilmeFavorito.titulo} do ano de ${meuFilmeFavorito.ano}, dirigido por ${meuFilmeFavorito.diretor} e estrelado por ${meuFilmeFavorito.atores} `)


4 - 

const pessoaQualquer = {
    nome: "Diego",
    idade: 30,
    email: "diego.tj.molinari@gmail.com",
    endereco: "Rua Geral Oliveira"
}

function anonimizarPessoa() {
    const ficouAnonimo = {
        ...pessoaQualquer,
        nome: "Anônimo"
    }
    return ficouAnonimo;
}
console.log(pessoaQualquer);
console.log(anonimizarPessoa());


 
//-----------------------------------------------------------------------------------------------------------------------------------------------


//Exercícios de Funções de array//

1 - a)

const arrayOriginal = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 },
]

const arrayAdultos = arrayOriginal.filter((pessoa, index, array) => {
    if (pessoa.idade >= 20) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade,
        }
    }
})
console.log(arrayOriginal)
console.log(arrayAdultos)

b ) 

const arrayOriginal = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 },
]

const arrayMenores = arrayOriginal.filter ((pessoa, index, array) => {
    if (pessoa.idade < 20) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade,
        }
    }
})
console.log(arrayOriginal)
console.log(arrayMenores)



2 - a)
const arrayOriginal = [1, 2, 3, 4, 5, 6]

const multiplosDeDois = arrayOriginal.map((numero, index, array) => {
    return numero * 2
})

console.log(arrayOriginal)
console.log(multiplosDeDois)


b)

const arrayOriginal = [1, 2, 3, 4, 5, 6]

const multiplosDeTres = arrayOriginal.map((numero, index, array) => {
    return numero * 3
})
console.log(arrayOriginal)
console.log(multiplosDeTres)


const arrayOriginal = [1, 2, 3, 4, 5, 6];

function multiploDeTres(array) {
    const array3 = array.map((numero) => {
        return `${numero *3}`;
    })
    return array3;
    }
let arrayTriplicado = multiploDeTres(arrayOriginal)
console.log(arrayTriplicado)



//c)
function verificaParOuImpar(array) {
    const arrayParOuImpar = array.map((elemento, index, array) =>{
        if (elemento % 2 == 0) {
            return `${elemento} é par`
        }
        else {
            return `${elemento} é impar`
        }
    })
    return arrayParOuImpar 
}

let arrayParOuImpar = verificaParOuImpar(arrayOriginal)
console.log(arrayParOuImpar)

//fiquei um dia nesse exercício 2 



/* 3) 
const pessoas = [
    { nome: "Paula", idade: 12, altura: 1.8},
    { nome: "João", idade: 20, altura: 1.3},
    { nome: "Pedro", idade: 15, altura: 1.9},
    { nome: "Luciano", idade: 22, altura: 1.8},
    { nome: "Artur", idade: 10, altura: 1.2},
    { nome: "Soter", idade: 70, altura: 1.9}
]

//a)
const pessoasPermitidas = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade,
            altura: pessoa.altura
        }
    }
})

console.log(pessoas)
console.log(pessoasPermitidas)

//b)
const pessoasProibidas = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5) {
        return {
            nome: pessoa.nome,
            idade: pessoa.idade,
            altura: pessoa.altura
        }
    }
})

console.log(pessoas)
console.log(pessoasProibidas)*/


/* 4) 

const consultas = [
    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const consultasMarcadas = consultas.map((consulta) =>
{
    if(consulta.genero === "masculino" && consulta.cancelada == false ) 
    {
        return (`Olá, Sr. ${consulta.nome} Estamos enviando esta mensagem para lembrá-lo  da sua consulta no dia ${consulta.dataDaConsulta} . Por favor, acuse o recebimento deste e-mail.`)
    } else if (consulta.genero === "feminino" && consulta.cancelada == false ) 
    {
        return (`Olá, Sra. ${consulta.nome} Estamos enviando esta mensagem para lembrá-la  da sua consulta no dia ${consulta.dataDaConsulta} . Por favor, acuse o recebimento deste e-mail.`)
    } 
})

console.log(consultasMarcadas)

const consultasCanceladas = consultas.map((consulta2) =>{
    if( consulta2.genero === "masculino" && consulta2.cancelada === true )
    {
        return (`Olá, Sr. ${consulta2.nome}. Infelizmente, sua consulta marcada para o dia ${consulta2.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
    } else if (consulta2.genero === "feminino" && consulta2.cancelada === true ){
        return (`Olá, Sra. ${consulta2.nome}. Infelizmente, sua consulta marcada para o dia ${consulta2.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
    }
})

console.log(consultasCanceladas)
*/


/* 5)   

const contas = [
    { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

*/

