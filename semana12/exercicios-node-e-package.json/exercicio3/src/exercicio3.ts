import * as fs from 'fs';

const nomeDoArquivo: string = process.argv[2];
const novaTarefa: string = process.argv[3] + '\n';

try {
  fs.appendFileSync(nomeDoArquivo, novaTarefa);
  console.log('Tarefa adicionada com sucesso.');
} catch (error) {
  console.log('Houve um erro ao atualizar a base de dados.' + error.message);
}
