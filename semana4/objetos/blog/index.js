function aoClicarNoBotao (evento){
    
    const meuTitulo = document.getElementById('titulo');
    console.log(meuTitulo.value)
    const meuAutor = document.getElementById('autor');
    console.log(meuAutor.value)
    const meuConteudo = document.getElementById('conteudo');
    console.log(meuConteudo.value)
    const textoDigitadoNaTela = document.getElementById('mostra-digitado');
    textoDigitadoNaTela.innerHTML += "<h2>" + meuTitulo.value + "</h2>" + "Autor: " + meuAutor.value + "<br><br>" + meuConteudo.value
    
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
}

