console.log('oi, eu sou o exercício 2');

/* A. Em uma função Arrow function não precisamos utilizar o termo "function" e o termo "async" virá logo após o nome da função. Ex: const exemplo = async() => {} */

//B.

import axios from 'axios';

const baseURL: string =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

const getAllUsers = async (): Promise<any[]> => {
  try {
    const users = await axios.get(`${baseURL}/subscribers/all`);
    console.log(users.data);
    return users.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
getAllUsers();
