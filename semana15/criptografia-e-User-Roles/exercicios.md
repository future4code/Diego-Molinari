#### Exercícios

#### Exercício 1
a) O round é como uma biblioteca do bcrypt que chama os costs. Já os costs é algo relacionado a segurança na senha, usaremos um cost de número 12 (mais comum). O salt é uma string aleatória que colocamos na senha antes de criar o hash, assim a senha fica mais segura.

#### Exercício 2
a) Primeiro precisamos alterar o SignUp, assim teremos usuários cadastrados com a criptografia para depois testar o Login.

d) Ele nao precisa sofre modificações, ele já necessita de uma autorização vinda do header para ser execultado, ou seja, o usuário precisa estar logado.

