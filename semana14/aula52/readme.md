#### Exercicio 1

a) Temos o resultado das linhas da tabela, e vários metadados que também são retornados.

b)
```SQL
async function searchAtor(nome: string){
  try {
  const result = await connection
  .select("*")
  .from("Ator")
  .where("nome", "LIKE", `%${nome}%`)
  console.log(result)
  } catch (error) {
  console.log(error)
  }
 }

 searchAtor("tony")
```

c)
```SQL
async function getCountByGender(genero: string): Promise<any>{
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Ator WHERE genero = "${genero}"
    GROUP BY genero
  `)

  console.log(result[0][0])
  return result[0][0]
}
 getCountByGender("female")
```

#### Exercicio 2
a)
```SQL
async function updateSalaryById(id: string, salario: number): Promise<void> {
  await connection.update({salario}).from("Ator").where("id", "=", id)
}
updateSalaryById("018", 5000000)
```

b)
```SQL
const deleteActor = async (id: string): Promise<void> => {
  await connection("Ator")
    .delete()
    .where("id", id);
};
//deleteActor("005")
```

c)
```SQL
const getAvgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection.from("Ator").where("genero", "=", gender).avg("salario")
  console.log(result)
}

//getAvgSalaryByGender("male")
```

#### Exercício 3
a) O req.params permite a leitura do parâmetro passado pela URL, ou seja, o id

b)São linhas de status, mostram a resposta da requisição, caso dê certo, ou caso dê errado. Caso dê certo, vai ser retornado o status 200 e o ator em questão, caso dê errado, será retornado o status 400 e a mensagem de erro.

c)
```SQL
app.get('/ator', async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.genero as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```



