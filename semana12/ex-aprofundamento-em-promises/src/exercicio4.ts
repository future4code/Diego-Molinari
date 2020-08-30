console.log('Oi, eu sou o exercício 4');

//A. Função assincrona do tipo void pois não retorna resultado

import axios from 'axios';

const baseURL: string =
  'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

const publishNews = async () => {
  try {
    type news = {
      title: string;
      content: string;
      date: number;
    };
    const createNews = async (body: news): Promise<void> => {
      try {
        await axios.put(`${baseURL}/news`, body);
      } catch (e) {
        console.log(e);
      }
    };
    await createNews({
      title: '123456789',
      content: '987654321',
      date: Date.now(),
    });
    console.log('notícia criada com sucesso');
  } catch (error) {
    console.log(error);
    return [];
  }
};

publishNews();
