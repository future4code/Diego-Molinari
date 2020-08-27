console.log('oi, eu sou o exercício 7');

import axios from 'axios';

const baseURL: string =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

type user = {
  id: string;
  name: string;
  email: string;
};
