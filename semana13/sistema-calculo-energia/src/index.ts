//imports
import { Client } from './Client';
import { Residence } from './Residence';
import { Commerce } from './Commerce';
import { Industry } from './Industry';
import { ClientManager } from './ClientManager';
import { ResidentialClient } from './ResidentialClient';
import { CommercialClient } from './CommercialClient';
import { IndustrialClient } from './IndustrialClient';

/* Exercicio 1. ---------------------------------- */
const client: Client = {
  name: 'Diego',
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2;
  },
};

console.log(client.calculateBill());
console.log('Nome:', client.name);
console.log('Numero de registro:', client.registrationNumber);
console.log('Consumo de Energia:', client.consumedEnergy);

/* 1.a Todas as propriedades podem ser acessadas e impressas pois interfaces não possuem encapsulamento, tudo é publico. */

/* Exercicio 2. ---------------------------------- */
// 2.a  R- retorna uma mensagem de erro dizendo que nao podemos criar uma instancia para uma classe abstrata.
//const place: Place = new Place("012458")

// 2.b R- Deveremos criar uma nova classe, estendendo a classe Place. Assim conseguiriamos criar uma nova instância.

/* Exercicio 3. ---------------------------------- */
const home: Residence = new Residence(6, '07850-021');
const store: Commerce = new Commerce(3, '03257-000');
const factory: Industry = new Industry(22, '94789-010');

console.log('Cep home: ', home.getCep());
console.log('Cep store: ', store.getCep());
console.log('Cep factory: ', factory.getCep());

console.log('nº de moradores de home ', home.getDwellersQuantity());
console.log('nº de moradores de home ', store.getFloorsQuantity());
console.log('nº de moradores de home ', factory.getMachinesQuantity());

/* Exercicio 4. ---------------------------------- */
// R- resposta no arquivo ResidentialClient.ts

/* Exercicio 5. ---------------------------------- */
//a. As semelhanças é que tanto o ResidentialClient como o CommercialClient possuem name, registrationNumber, consumedEnergy e cep
// b. As diferenças é q a taxa do calculateBill é diferenciada e o floorQuantity que existe somente no CommercialClient, enquanto o exclusivo do ResidentialClient é o residentsQuantity.

/* Exercicio 6. ---------------------------------- */
// a. A classe IndustrialCliente é filha da Industry
// b. IndustrialClient implementa a interface Client

/* Exercicio 7. ---------------------------------- */
// R- resposta no arquivo ClientManeger.ts

/* Exercicio 8. ---------------------------------- */

const clientManager = new ClientManager();

const residentialClient = new ResidentialClient(
  'Diego Molinari',
  25,
  98,
  '88200000',
  5,
  '125456898',
);
clientManager.registerClient(residentialClient);

const commercialClient = new CommercialClient(
  'Bar do Pieira',
  47,
  500,
  '77867555',
  6,
  '0845245',
);
clientManager.registerClient(commercialClient);

const industrialClient = new IndustrialClient(
  'JS Calçados',
  478,
  1000,
  '532236',
  56,
  '01228200',
);
clientManager.registerClient(industrialClient);

console.log(
  `O valor da conta a ser paga é de R$${clientManager.calculateBillOfClient(
    10,
  )}.`,
);

console.log(
  `O valor total recebido pela concessionária é de R$${clientManager.calculateTotalIncome()}.`,
);

//console.log(clientManager.deleteUser(2001))
