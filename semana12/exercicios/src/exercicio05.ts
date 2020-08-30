type operacao = {
  soma: number;
  subtracao: number;
  multiplicacao: number;
  maior: number;
};

const calculo = (num1: number, num2: number) => {
  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const multiplica = num1 * num2;
  const maior = num1 > num2 ? num1 : num2;
};

console.log(calculo(1, 2));
