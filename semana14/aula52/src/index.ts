import knex from 'knex';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { AddressInfo } from 'net';

dotenv.config();

const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Ator WHERE id = "${id}"
  `);
  console.table(result[0][0]);
  return result[0][0];
};

async function searchAtor(nome: string) {
  try {
    const result = await connection
      .select('*')
      .from('Ator')
      .where('nome', 'LIKE', `%${nome}%`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//searchAtor("tony")

async function getCountByGender(genero: string): Promise<any> {
  const result = await connection.raw(`
    SELECT COUNT(*) FROM Ator WHERE genero = "${genero}"
    GROUP BY genero
  `);

  console.log(result[0][0]);
  return result[0][0];
}
//getCountByGender("female")

const createActor = async (
  id: string,
  nome: string,
  salario: number,
  data_aniversario: Date,
  genero: string,
): Promise<void> => {
  await connection
    .insert({
      id: id,
      nome: nome,
      salario: salario,
      data_aniversario: data_aniversario,
      genero: genero,
    })
    .into('Ator');
};

//createActor("018", "Diego Molinari", 4000000, new Date("2020-10-05"), "male");

async function updateSalaryById(id: string, salario: number): Promise<void> {
  await connection.update({ salario }).from('Ator').where('id', '=', id);
}
//updateSalaryById("018", 5000000)

const deleteActor = async (id: string): Promise<void> => {
  await connection('Ator').delete().where('id', id);
};
//deleteActor("005")

const getAvgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection
    .from('Ator')
    .where('genero', '=', gender)
    .avg('salario');
  console.log(result);
};

//getAvgSalaryByGender("male")

const countActors = async (genero: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Ator WHERE genero = "${genero}"
  `);

  const count = result[0][0].count;
  return count;
};

app.get('/ator/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

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

app.put('/ator', async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.nome,
      req.body.salario,
      new Date(req.body.data_aniversario),
      req.body.salario,
    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const updateSalary = async (id: string, salario: number): Promise<any> => {
  await connection('Ator')
    .update({
      salario: salario,
    })
    .where('id', id);
};

app.post('/ator', async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id as string, req.body.salario as number);
    res.status(200).send({
      message: 'Success',
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
