console.log('oi, eu sou o exercício 1');

//A. é o endpoint get subscribers/all
//B. Promise<any>

//C.

import axios from 'axios';

const baseURL: string =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

async function getAllUsers(): Promise<any[]> {
  try {
    const users = await axios.get(`${baseURL}/subscribers/all`);
    console.log(users.data);
    return users.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
getAllUsers();
