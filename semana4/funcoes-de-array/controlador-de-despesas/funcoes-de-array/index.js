let guardaDespesa = []

 function cadastrarDespesas(evento){

    const meuValor = document.getElementById('valor');
    const meuTipo = document.getElementById('tipo');
    const minhaDescricao = document.getElementById('descricao');

    if(meuValor.value === "" || meuTipo.value === "" || minhaDescricao.value === "" )
    {
        alert ("insira todos os valores")
    }
        else 
        { 

            let despesa = {
                valor: meuValor.value,
                tipo: meuTipo.value,
                descricao: minhaDescricao.value
            }
        
            guardaDespesa.push(despesa)
            console.log(guardaDespesa)
        
            document.getElementById("valor").value = ""
            document.getElementById("descricao").value = ""
        }
    }

    function filtraValor(){


    const filtroValorMaximo = document.getElementById('valorMaximo');
    const filtroValorMinimo = document.getElementById('Valorminimo');
    const filtroValorTipo = document.getElementById('categoria');
    const mostraDespesa = document.getElementById('mostraDespesa');

    if(filtroValorTipo.value === "cerveja")
    {
        guardaDespesa.filter (despesa =>{
            if(despesa.tipo === "cerveja"){
                console.log(despesa)
                return despesa;
            }
            

        })
    } else if(filtroValorTipo.value === "vodka")
    {
        guardaDespesa.filter (despesa =>{
            if(despesa.tipo === "vodka"){
                console.log(despesa)
                mostraDespesa.innerHTML += `<ul> <li> ${despesa.tipo}</li> <li>${despesa.descricao}</li> <li>${despesa.valor}</li></ul>`
                

            }
        } )   
    }
}




    


 





































