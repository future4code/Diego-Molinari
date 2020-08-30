"use strict";
let meuNumero;
meuNumero = 4;
console.log(meuNumero);
var CORES_DO_ARCO_IRIS;
(function (CORES_DO_ARCO_IRIS) {
    CORES_DO_ARCO_IRIS["VERMELHO"] = "Vermelho";
    CORES_DO_ARCO_IRIS["LARANJA"] = "laranja";
    CORES_DO_ARCO_IRIS["AMARELO"] = "amarelo";
    CORES_DO_ARCO_IRIS["VERDE"] = "verde";
    CORES_DO_ARCO_IRIS["AZUL"] = "azul";
    CORES_DO_ARCO_IRIS["ANIL"] = "anil";
    CORES_DO_ARCO_IRIS["VIOLETA"] = "violeta";
})(CORES_DO_ARCO_IRIS || (CORES_DO_ARCO_IRIS = {}));
const pessoa_1 = {
    nome: 'Diego',
    idade: 30,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL,
};
const pessoa_2 = {
    nome: 'João',
    idade: 35,
    corFavorita: CORES_DO_ARCO_IRIS.VERDE,
};
const pessoa_3 = {
    nome: 'Maria',
    idade: 28,
    corFavorita: CORES_DO_ARCO_IRIS.VERMELHO,
};
console.log(pessoa_1);
console.log(pessoa_2);
console.log(pessoa_3);
//# sourceMappingURL=exercicio01.js.map