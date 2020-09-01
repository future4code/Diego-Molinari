/* Exercício 1.
Analise a classe User. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, email, etc que você quiser) e imprima, no terminal, o id, o nome e o email desse usuário. 

a. Seria possível imprimir a senha (password) atrelada a essa instância?
R- Não, pois o password está declarado como privado e eu nao tenho um geter para ele
b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
R- Foi chamado uma vez */

import { User } from './User';

const newUser: User = new User('1', 'usuario1@gmail.com', 'Usuário1', '123456');
console.log('Ex.1----------------------------------------------');
console.log('id do usuário: ', newUser.getId());
console.log('Nome do usuário: ', newUser.getName());
console.log('E-mail do usuário: ', newUser.getEmail());
console.log('----------------------------------------------');

/* Exercício 2. 
Analise a Customer. Perceba quais propriedades são públicas e quais são privadas. Copie esse código para o seu exercício de hoje e crie uma instância dessa classe (com as informações que você quiser). Atente-se ao fato de que o Customer é uma subclasse (ou classe filha) da classe User. Sabemos disso porque há a palavra extends na declaração da classe Customer; e, em seu construtor, foi usado o super.


a. Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
Foi impressa uma vez
b. Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
Foi impressa duas vezes. Porque quando eu chamo o construtor da classe filha eu também chamo o construtor da classe pai */
import { Customer } from './Customer';
const newCustumer: Customer = new Customer(
  '5',
  'diego@gmail.com',
  'Diego',
  '2234556',
  '123456789',
);

/* Exercício 3.
Agora, imprima todas as informações possíveis da instância que você criou: o id, o nome, o email, o valor total de compra (purchaseTotal) e o cartão de crédito (creditCard). Perceba que as propriedades públicas da classe pai (User) foram "herdadas" pela classe filha (Customer).

a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê? 
R- Não porque o password é um atributo da classe pai e não tem um geter para ele em User, assim ele nao pode ser acessado dentro do Custumer  */
console.log('Ex.3----------------------------------------------');
console.log('ID do consumidor: ', newCustumer.getId());
console.log('Nome do consumidor: ', newCustumer.getName());
console.log('E-mail do consumidor: ', newCustumer.getEmail());
console.log('Total de compra do consumidor: ', newCustumer.purchaseTotal);
console.log('Cartão de crédito do consumidor: ', newCustumer.getCreditCard());
console.log('----------------------------------------------');

/* Exercício 4.
Adicione um método público à classe User. Esse método deve ter o nome de introduceYourself("apresente-se") e deve retornar a mensagem: "Olá, bom dia!". As classes filhas sempre têm acesso aos métodos públicos da classe pai. Então, para realizar o teste dessa sua função, faça com que a instância que você criou para a classe Customer chame esse método  */
newCustumer.introduceYourself();

/* Exercício 5.
Altere o método que você acabou de criar para que ele imprima a mensagem: "Olá, sou ${nome do usuário}. Bom dia!". Realize os mesmos testes anteriores. 
R- A alteração foi feita no User.ts */

/* Exercício 6.
Agora, vamos criar uma nova classe: a que representa os funcionários (Employee). Ela deve ser uma classe filha da classe User. Além disso,  ela deve possuir as propriedades: data de admissão (admissionDate) e salário base (baseSalary). Como elas são informações sensíveis, não é recomendável que sejam públicas. Então, iremos declará-las com o encapsulador protected (você vai entender o motivo mais para frente). Adicione dois métodos getters: um para acessar o admissionDate e outro para o baseSalary. Crie uma instância da classe Employee 
a. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
R - três vezes */

import { Employee } from './Employee';
import moment from 'Moment';
const newEmployee: Employee = new Employee(
  '20',
  'employee1@gmail.com',
  'Employee1',
  '1234562',
  moment('01/09/2018', 'DD/MM/YYYY').format('DD/MM/YYYY'),
  500,
);

console.log(newEmployee);

/* b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?*/
console.log('Ex.6----------------------------------------------');
console.log('ID do Funcionário: ', newEmployee.getId());
console.log('Nome do Funcionário: ', newEmployee.getName());
console.log('E-mail do Funcionário: ', newEmployee.getEmail());
console.log(
  'Data de Admissão do Funcionário: ',
  newEmployee.getAdmissionDate(),
);
console.log(`Salario Base do Funcionário: R$`, newEmployee.getBaseSalary());
console.log('----------------------------------------------');

/* Exercício 7.
Adicione um método público à classe Employee: calculateTotalSalary ("calcula o salário total"). Ele deve retornar o valor do baseSalary somado com os benefícios do funcionário, considere que todos possuem o mesmo valor de R$400 de benefícios. Faça os testes com a instância que você já criou */
console.log('O salário total é R$', newEmployee.calculateTotalSalary());

/* Exercício 8.
Agora, vamos criar a última classe do nosso sistema ( 🥳): `Seller` (vendedor). Todo vendedor, na vida real, é um funcionário da nossa loja certo? Então, a classe vendedor deve ser **filha** da classe **`Employee`**. Perceba que agora estamos criando uma classe filha (`Seller`) cuja classe pai (`Employee`)  é uma classe filha da classe `User`. (Releia essa frase até entender bem). Isso é possível de se fazer e muito útil, por permitir que **reaproveitemos** muito código. 

Comece simplesmente criando a classe sem nenhuma propriedade, mas garantindo que ela é filha da classe `Employee`. O seu código, nesse momento, deve ficar assim:

As propriedades admissionDate e baseSalary foram criadas como protected para que elas não fossem acessadas fora da classe, mas pudessem ser acessadas pela classe filha. Quando já sabemos que uma classe terá filhas, a gente para para pensar: "o que eu quero que as filhas acessem?" e a resposta para essa pergunta nos dá as propriedades que devem ser protected. Normalmente, são propriedades "sensíveis" mas que são úteis dentro das filhas.

a. Crie uma instância da classe Seller. Você vai reparar que essa classe já possui um construtor, pois quando não colocamos um construtor na classe filha, ela herda o construtor da classe Pai. Quais parâmetros você teve que passar para esse construtor?

b. Imprima todas as informações da instância que você criou individualmente (ou seja, cada uma em uma linha própria). O que você conseguiu imprimir? O que não conseguiu? Por quê? 
*/
