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
console.log("Bem vindo ao jogo de Blackjack!")
confirm("Quer iniciar uma nova rodada?")
let confirmar = true
let confirmar2 = true
let arrayUsuarioV = []
let arrayComputadorV = []
let arrayUsuarioT = []
let arrayComputadorT = []
let cartasTotais = ""
let somaUsuario = 0
let somaComputador = 0

if (confirm) {
    while (confirmar) {
        for (let i = 0; i < 2; i++) {
            const cartaUsuario = comprarCarta()
            const cartaComputador = comprarCarta()
            arrayUsuarioT.push(cartaUsuario.texto)
            arrayComputadorT.push(cartaComputador.texto)
            arrayUsuarioV.push(cartaUsuario.valor)
            arrayComputadorV.push(cartaComputador.valor)
            somaUsuario += arrayUsuarioV[i]
            somaComputador += arrayComputadorV[i]
            if (somaUsuario !== 22 || somaComputador !== 22) {
                confirmar = false
            }
        }
    }
    if (somaUsuario === 21 && somaComputador !== 21) {
        alert("Suas cartas são: " + arrayUsuarioT[0] + arrayUsuarioT[1] + ". Sua pontuação é: " + somaUsuario +
            "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
            "\nVocê venceu!")
    } else if (somaUsuario === 21 && somaComputador === 21) {
        alert("Suas cartas são: " + arrayUsuarioT[0] + arrayUsuarioT[1] + ". Sua pontuação é: " + somaUsuario +
            "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
            "\nEmpate!")
    } else if (somaUsuario === 22 || somaComputador === 22) {
        alert("Duas cartas foram Ases, vamos repetir")
    } else {
        b = confirm("Suas cartas são: " + arrayUsuarioT[0] + " " + arrayUsuarioT[1] + ". A carta revelada do computador é " + arrayComputadorT[0] + "." +
            "\n" +
            "Deseja comprar mais uma carta?")
        if (b) {
            let i = 2
            while (confirmar2) {
                cartasTotais = ""
                if (somaUsuario >= 21) {
                    confirmar2 = false
                    break
                }
                const cartaUsuario2 = comprarCarta()
                arrayUsuarioT.push(cartaUsuario2.texto)
                arrayUsuarioV.push(cartaUsuario2.valor)
                somaUsuario += arrayUsuarioV[i]
                cartasTotais += arrayUsuarioT + " "
                i++

                if (somaUsuario >= 21) {
                    confirmar2 = false
                    break
                }

                let a = confirm("Suas cartas são: " + cartasTotais + ". A carta revelada do computador é " + arrayComputadorT[0] + "." +
                    "\n" +
                    "Deseja comprar mais uma carta?")

                if (!a) {
                    confirmar2 = false
                }
            }

            if ((somaUsuario > somaComputador && somaUsuario <= 21) || (somaUsuario < somaComputador && somaComputador > 21 && somaUsuario <= 21)) {
                alert("Fim de jogo!" +
                    "\nSuas cartas são: " + cartasTotais + ". Sua pontuação é: " + somaUsuario +
                    "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
                    "\nVocê venceu!")
            } else if ((somaComputador > somaUsuario && somaComputador <= 21) || (somaUsuario > somaComputador && somaUsuario > 21 && somaComputador <= 21)) {
                alert("Fim de jogo!" +
                    "\nSuas cartas são: " + cartasTotais + ". Sua pontuação é: " + somaUsuario +
                    "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
                    "\nO computador venceu!")
            } else if (somaUsuario > somaComputador && somaUsuario > 21 && cartaComputador <= 21) {
                alert("Fim de jogo!" +
                    "\nSuas cartas são: " + cartasTotais + ". Sua pontuação é: " + somaUsuario +
                    "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
                    "\nO computador venceu!")
            } else if (somaComputador > somaUsuario && somaComputador > 21 && cartaUsuario <= 21) {
                alert("Fim de jogo!" +
                    "\nSuas cartas são: " + cartasTotais + ". Sua pontuação é: " + somaUsuario +
                    "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
                    "\nVocê venceu!")
            } else {
                alert("Fim de jogo!" +
                    "\nSuas cartas são: " + cartasTotais + ". Sua pontuação é: " + somaUsuario +
                    "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
                    "\nEmpate!")
            }
        } else {
            alert("Suas cartas são: " + arrayUsuarioT[0] + " " + arrayUsuarioT[1] + ". Sua pontuação é: " + somaUsuario +
                "\nAs cartas do computador são: " + arrayComputadorT[0] + arrayComputadorT[1] + ". A pontuação do computador é: " + somaComputador +
                "\nVocê venceu!")
        }

    }
} else {
    console.log("Acabou o jogo!")
}