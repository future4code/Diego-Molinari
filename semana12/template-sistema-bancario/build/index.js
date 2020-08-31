"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccounts = void 0;
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
const archiveName = process.argv[2];
const newAccountName = process.argv[3];
const newAccountCPF = process.argv[4];
const newAccountDate = process.argv[5];
const newAccountBalance = process.argv[6];
const bufferArchive = fs.readFileSync(archiveName);
const textArchive = bufferArchive.toString();
const accountsList = textArchive ? JSON.parse(textArchive) : [];
function createAccount(newAccountName, newAccountCPF, newAccountDate, newAccountBalance) {
    const today = moment_1.default();
    const userBirthDate = moment_1.default(newAccountDate, 'DD/MM/YYYY');
    const diffInYears = today.diff(userBirthDate, 'years');
    if (diffInYears >= 18) {
        try {
            const numberCPF = Number(newAccountCPF);
            const numberDate = moment_1.default(newAccountDate, 'DD/MM/YYYY');
            const numberBalance = Number(newAccountBalance);
            accountsList.push({
                name: newAccountName,
                cpf: numberCPF,
                date: numberDate,
                balance: numberBalance,
            });
            const updatedAccountsList = JSON.stringify(accountsList, null, 2);
            fs.writeFileSync('./data.json', updatedAccountsList);
            console.log('Conta criada com sucesso');
        }
        catch (error) {
            console.log(error.message);
        }
    }
    else {
        console.log('Apenas maiores de 18 anos podem criar conta');
    }
}
createAccount(newAccountName, newAccountCPF, newAccountDate, newAccountBalance);
function getAllAccounts() {
    try {
        const fileData = fs.readFileSync('./data.json').toString();
        return JSON.parse(fileData);
    }
    catch (error) {
        console.log('Erro ao ler a base de dados: ' + error.message);
        return [];
    }
}
exports.getAllAccounts = getAllAccounts;
getAllAccounts();
