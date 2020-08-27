console.log('oi, eu sou o exercício 5');

import axios from 'axios';

const baseURL: string =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

type user = {
  id: string;
  name: string;
  email: string;
};

async function getAllUsers(): Promise<any[]> {
  try {
    const users = await axios.get(`${baseURL}/subscribers/all`);
    console.log(users.data);
    return users.data;
  } catch (error) {
    console.log(error);
    return [];
  }

  const sendMessage = async (users: user[], message: string): Promise<void> => {
    const promiseArray: Promise<any>[] = [];
    try {
      for (const user of users) {
        await axios.post(`${baseURL}/notifications/send`, {
          subscriberId: user.id,
          message,
        });
      }
      console.log('mensagem enviada para os usuários');
    } catch (error) {
      console.log('aconteceu um erro na requisição');
    }
  };
}

getAllUsers();
