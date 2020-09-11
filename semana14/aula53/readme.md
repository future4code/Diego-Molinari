## Aula 53 - Relações em SQL

### Exercício 1

a) Uma chave estrangeira serve para relacionar duas tabelas utilizando algo específico entre elas.

b)

```SQL
INSERT INTO Rating (id, comment, avaliacao, filmes_id)
VALUES (
	"004",
    "Atores ótimos",
    9,
    "004"
);
```

c) A query resulta em erro porque a id não é encontrada na outra tabela.

d)

```SQL
ALTER TABLE Filmes DROP COLUMN avaliacao;
```

e) Isso retorna um erro porque não há como apagar uma "linha pai", ou seja, uma linha passa informações para outra tabela.

### Exercicio 2

a) Criamos uma tabela que possui duas colunas, essas colunas são ligadas com dados de outras tabelas (Ator e Filmes)

b)

```SQL
INSERT INTO MovieCast VALUES
('001', '001'), ('002', '003'), ('004', '004'), ('001', '007'),
('002', '018'), ('004', '001'), ('001', '018'), ('002', '007');
```

c) A query resulta em erro porque a id não é encontrada na outra tabela. Ele aponta erro na FOREIGN KEY.

d) A query resulta em erro porque não há como apagar uma "linha pai", ou seja, uma linha que é FOREIGN KEY de outra tabela.

### Exercicio 3

a) O operador ON serve para colocarmos a condicional que mostra qual oque será comparado nas duas tabelas

b)

```sql
SELECT Filmes.id, titulo, avaliacao
FROM Rating
JOIN Filmes
ON Rating.filmes_id = Filmes.id ;
```

### Exercicio 4

a)

```sql
SELECT Filmes.id, titulo, avaliacao, comment
FROM Rating
JOIN Filmes
ON Rating.filmes_id = Filmes.id ;
```

b)

```sql
SELECT titulo, Filmes.id, ator_id
FROM MovieCast
JOIN Filmes
ON MovieCast.filme_id = Filmes.id
```

c)

```sql
SELECT AVG(avaliacao), avaliacao
FROM Rating
GROUP BY avaliacao
;
```

### Exercicio 5

a) JOIN precisa aparecer duas vezes para poder fazer mais de uma união entre as tabelas. O primeiro JOIN junto Movie com MovieCast, já o segundo JOIN junta a tabela Ator.

b)

```sql
SELECT f.titulo as movie_titulo, f.id as movie_id, a.nome as actor_nome, a.id as actor_id FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.filme_id
JOIN Ator a ON a.id = mc.ator_id;
```

c) A query em questão possui um erro, uma vírgula no lugar do ponto no momento de refenciar o título do filme. Ao corrigi-la a query funcionou

d)

```sql
SELECT
f.titulo as movie_name,
a.nome as actor_name,
r.avaliacao,
r.comment
FROM Filmes f
LEFT JOIN Rating r
ON r.filmes_id = f.id
LEFT JOIN MovieCast mc
ON f.id = mc.filme_id
JOIN Ator a
ON a.id = mc.ator_id;
```

### Exercicio 6

a) M:N.

b)

```sql
CREATE TABLE Oscar (
	tipo VARCHAR(255),
	data DATE,
	filme_id VARCHAR(255),
	FOREIGN KEY (filme_id) REFERENCES Filmes(id)
);
```

c)

```sql
SELECT Filmes.id, Filmes.titulo as "Título do filme", tipo
FROM Oscar
LEFT JOIN Filmes
ON Oscar.filme_id = Filmes.id;
```
