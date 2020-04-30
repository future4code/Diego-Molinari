/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*let userCard1 = comprarCarta() //primeira carta do usúario 
let userCard2 = comprarCarta() //segunda carta do usúario 
let computerCard1 = comprarCarta() //primeira carta do computador
let computerCard2 = comprarCarta() //segunda carta do computador
let scoreUser = (userCard1.valor + userCard2.valor) // pegar o texto das cartas sorteadas para o usuário , transformar em número e somar as cartas
let scoreComputer = (computerCard1.valor + computerCard2.valor) // pegar o texto das cartas sorteadas para o computador , transformar em número e somar as cartas

console.log("Bem vindo ao jogo de BlackJack")  //mensagem que aparecerá no terminal
   if (confirm("Bem vindo ao jogo de BlackJack, você quer iniciar uma nova rodada?")) //mensagem que aparecera como um span ao usuário
      {
         console.log("Vamos começar") // se o usuário clicar em ok, aparecerá essa mensagem no terminal
         console.log("Usuário, suas cartas são: "+ userCard1.texto, userCard2.texto, " você tem no total: ", scoreUser, "pontos") //imprime a mensagem para o usuário mostrando as cartas sorteadas em formato de texto mais a soma das duas cartas no formato de numero
         console.log("Computador, suas cartas são: "+ computerCard1.texto, computerCard2.texto, " você tem no total: ", scoreComputer, "pontos") //imprime a mensagem para o usuário mostrando as cartas sorteadas em formato de texto mais a soma das duas cartas no formato de numero
            if (scoreUser === scoreComputer) //Analisa se o jogo empatou
            {
               console.log("Empate!!")// caso de empate, imprime a frase "Empate!!" no terminal
            }
            if (scoreUser > scoreComputer) // analisa se o usuario teve uma pontuação maior que o computador
            {
               console.log("O usuário ganhou!") //caso o usuário tenha uma pontuação maior, imprime "o usuário ganho" no terminal
            }
            if(scoreUser < scoreComputer) // analisa se o computador teve uma pontuação maior que o usuário
            {
               console.log("O computador ganhou!") // caso o computador tenha uma pontuação maior, imprime "o computador ganhou" no terminal
            }
      } 
   else // condição para caso o usuário não aperte em ok no momento inicial do jogo
      {
         console.log("O jogo acabou") // se o usuário clicar em cancelar, aparecerá essa mensagem no terminal
      }  */