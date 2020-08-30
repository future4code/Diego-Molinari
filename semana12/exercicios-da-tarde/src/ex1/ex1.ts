// process.argv[0] = node
// process.argv[1] = arquivo

const nome: string = process.argv[2];
const idade: number = Number(process.argv[3]);

console.log(`Olá, você ${nome} tem ${idade} anos`); //b
console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`,
); //c
