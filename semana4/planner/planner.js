function criar() 
{
    const tarefa = document.getElementById("tarefa");
    const diaEscolhido = document.getElementById("diaEscolhido");

    if (tarefa.value === "") {
        alert("Este campo não pode ficar em branco, você precisa preencher com uma tarefa")
    } else {
        switch (diaEscolhido.value) {
                case "domingo":
                    document.getElementById("tarefaDomingo").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;

                case "segunda":
                    document.getElementById("tarefaSegunda").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;

                case "terca":
                    document.getElementById("tarefaTerca").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;
                
                case "quarta":
                    document.getElementById("tarefaQuarta").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;
                
                case "quinta":
                    document.getElementById("tarefaQuinta").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;
                
                case "sexta":
                    document.getElementById("tarefaSexta").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;
                
                case "sabado":
                    document.getElementById("tarefaSabado").innerHTML += `<li>  ${tarefa.value} </li>`;
                    tarefa.value = ""
                    alert("tarefa criada com sucesso")
                    break;

            
        }
    }

}