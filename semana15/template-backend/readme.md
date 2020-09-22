## Aula 55

#### Exercicio 1

a) Acredito que seja melhor utlizarmos string, pois nela temos a possibilidade de utilizar numeros, letras e simbolos para a criação de um id, ou seja, temos uma maior variação de caracteres.

#### Exercicio 2

a) Ele cria conexão com a base de dados, depois cria uma função que é responsável por inserir os dados enviados para a base de dados.

b)

```sql
CREATE TABLE User (
	user_id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
```

#### Exercicio 3

a) O "as string" garante que o dado em questão será pego em formato string. Como o token precisa estar em formato de string, essa linha garante que o formato está correto.
