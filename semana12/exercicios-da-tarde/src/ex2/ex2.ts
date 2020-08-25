// process.argv[0] = node
// process.argv[1] = arquivo

const add: number = Number(process.argv[2]) + Number(process.argv[3]);
console.log(`Adição: ${add}`);

const sub: number = Number(process.argv[2]) - Number(process.argv[3]);
console.log(`Subtração: ${sub}`);

const mult: number = Number(process.argv[2]) * Number(process.argv[3]);
console.log(`Multiplicação: ${mult}`);

const div: number = Number(process.argv[2]) / Number(process.argv[3]);
console.log(`Divisão: ${div}`);
