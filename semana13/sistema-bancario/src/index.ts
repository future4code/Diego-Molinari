import { Bank } from './Bank';
import { Account } from './Account';
import { Transaction } from './Transaction';

const bank: Bank = new Bank();

const action: string = process.argv[2];

switch (action) {
  case 'createAccount':
    bank.createAccount(process.argv[3], process.argv[4], process.argv[5]);
    console.log('Sucesso!');
    break;
  case 'getBalance':
    console.log(bank.getBalance(process.argv[3], process.argv[4]));
    break;
  case 'addBalance':
    bank.addBalance(process.argv[3], process.argv[4], Number(process.argv[5]));
    console.log('Sucesso!');
    break;
  case 'payBill':
    bank.payBill(
      process.argv[3],
      Number(process.argv[4]),
      process.argv[5],
      process.argv[6],
    );
    break;
  case 'updateBalance':
    bank.updateBalance();
    break;
  case 'makeTransfer':
    bank.makeTransfer(
      process.argv[3],
      process.argv[4],
      process.argv[5],
      process.argv[6],
      Number(process.argv[7]),
    );
    break;
  default:
    console.log('Operação inválida');
    break;
}
