console.log('Oi, eu sou o exercício 3');
/* A. Não pois já foi criada a tipagem USER */

/*  B. Quando fazemos o mapeamento do resultado de um promise, podemos reestruturar o resultado, retornando de uma forma que se deseja. */

import axios from 'axios';

const baseURL: string =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

type user = {
  id: string;
  name: string;
  email: string;
};

const getAllUsers = async (): Promise<user[]> => {
  try {
    const users = await axios.get(`${baseURL}/subscribers/all`);
    console.log(users.data);
    return users.data.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

getAllUsers();
