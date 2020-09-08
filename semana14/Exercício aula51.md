

### Exercício 1
a) CREATE TABLE: cria uma nova tabela;
VARCHAR: Utilizado para declarar strings;
DATE: Para declarar datas no formato "YYYY-MM-DD";
PRIMARY KEY: indica que é a key principal;
NOT NULL: impede que a coluna tenha valores nulos.

b) Esses comandos mostraram, respectivamente, o nome do banco de dados e o nome da tabela que acabamos de criar.

C) Describe Actor mostra todas as informações da tabela Actor.


### Exercício 2
a) A query é:
```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pirez",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' Entrada duplicada '002' para chave 'PRIMÁRIA' Esse erro ocorre porque tentamos acrescentar dois itens com uma mesma key.

c) Error Code: 1136. Column count doesn't match value count at row 1. Número de colunas não corresponde ao número referente na linha 1. Isso ocorre porque declaramos somente 3 colunas, quando nossa tabela tem 5 colunas.

d) Error Code: 1364. Field 'nome' doesn't have a default value. O campo 'nome' não possui um valor padrão. Isso ocorreu porque não declaramos o valor do campo nome, e ele não possui um valor padrão.

e) e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 Valor de data incorreto: '1950' para coluna 'birth_date' na linha 1. Isso ocorreu porque as datas devem ser declaradas entre aspas.


### Exercício 3
a) 
```SQL
SELECT * from Ator WHERE genero = "female";
```

b) 
```SQL
SELECT salario from Ator WHERE nome = "Tony Ramos";
```

c) 
```SQL
SELECT * from Ator WHERE genero = "invalid"; 
```
Não foi retornado nada, porque não temos nenhum input com o gendero 'invalid' em nossa tabela

d) 
```SQL
SELECT * from Ator WHERE salario >= 500000;
```

e) Error Code: 1054. Unknown column 'nome' in 'field list' Coluna 'nome' desconhecida no 'campo lista' Ocorreu porque não temos a coluna 'nome' e sim a coluna 'name'.


### Exercício 4
a) Na query temos as ações SELECT * from Actor que indica uma seleção na tabela Actor e WHERE (onde) o nome pode começar com as letras A ou J, além do que, o atributo 'salary', deve ser maior que 300000.
```SQL
WHERE (nome LIKE "A%" OR nome LIKE "J%") AND salario > 300000;
```

b) 
```SQL
SELECT * from  Ator WHERE nome NOT LIKE "A%" and salario > 350000;
```

c) 
```SQL
SELECT * FROM Ator WHERE nome LIKE "%G%" or "%g%";
```

d)
```SQL
SELECT * FROM Ator WHERE (nome LIKE "%A%" or "%a%" or "%g%" or "%G%") AND salario BETWEEN 350000 AND 900000;
```

### Exercício 5
a)
```SQL
CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL UNIQUE,
  sinopse TEXT NOT NULL,
  data_lancamento DATE NOT NULL,
  avaliacao FLOAT NOT NULL
);
```
Tabela Filme, todas as colunas terão que ter valor (NOT NULL), titulo tem ainda a restrição UNIQUE para evitar nomes repetidos, sinopse é um TEXT (sem limite de caractéres), data_lançamento (DATE) e a avaliacao é um número FLOAT que receberá valores de 1 a 10.

b) 
```SQL
INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a 
    rotina do casamento. Um dia eles são atingidos por um fenômeno 
    inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
```

c) 
```SQL
INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa
    grandes confusões. A vida dela e dos seus quatro filhos sofre uma 
    reviravolta depois que Zaida, empregada e amiga de Dona 
    Picucha, anuncia que vai se casar e não poderá mais morar 
    com ela",
    "2012-12-27",
    10
);
```

d) 
```SQL
INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com 
    Vadinho, que só quer saber de farras e jogatina nas boates. 
    A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
```

e) 
```SQL
INSERT INTO Filmes (id, titulo, sinopse, data_lancamento, avaliacao)
VALUES(
	"004",
    "Benzinho",
    "Irene é uma mãe de família que precisa lidar com a partida prematura de seu filho mais velho, Fernando, que vai tentar a vida como jogador de handebol na Alemanha.",
    "2018-08-23",
    6
);
```

### Exercício 6
a)
```SQL
UPDATE Ator
SET 
	nome = "Moacyr Franco",
	data_aniversario = "2020-02-10"
WHERE id = "003";
```

b)
Atualizar
```SQL
UPDATE Ator
SET nome = "JULIANA PÃES"
WHERE id = "005";
```

Voltar ao nome anterior
```SQL
UPDATE Ator
SET nome = "Juliana Paes"
WHERE id = "005";
```

c)
```SQL
UPDATE Ator
SET 
nome = "Moacyr Franco",
data_aniversario = "2020-02-10",
salario = 600000,
genero = "male"
WHERE id = "005";
```

d)
```SQL
UPDATE Ator
SET 
nome = "Diego Molinari",
data_aniversario = "1989-09-29",
salario = 1600000,
genero = "male"
WHERE id = "155";
```
Não retornou um erro, porém retornou que nenhuma linha do banco de dados foi afetada


### Exercício 7
a)
```SQL
DELETE FROM Ator WHERE nome = "Fernanda Montenegro";
```

b)
```SQL
DELETE FROM Ator
WHERE
	genero = "male" AND
	salario > 1000000
```

### Exercício 8
a)
```SQL
SELECT COUNT(*), genero
FROM Ator
GROUP BY genero
```
Na ultima query temos um contator que conta o numero de cada gênero na tabela ator

b)
```SQL
SELECT id, nome FROM Ator  
ORDER BY nome DESC;
```

c) 
```SQL
SELECT * FROM Ator  
ORDER BY salario DESC;
```

d)
```SQL
SELECT * FROM Ator  
ORDER BY salario DESC
LIMIT 3;
```

e)
```SQL
SELECT AVG(salario), genero FROM Ator
GROUP BY genero;
```



















