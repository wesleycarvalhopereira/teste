// const funcoes = require('./funcoes-auxiliares');
// console.log(funcoes);
// ou somente trazer o valor de um atributo, no caso gets virá o 10
// console.log(funcoes.gets());

// ou melhor ainda melhorar o código pegando da importacao e transformando em duas constantes
const {gets, print} = require('./funcoes-auxiliares');
print(gets())

// const pessoa = {
//     nome: 'Wesley'
// };
// é igual
// const {nome} = pessoa; ou const nome = pessoa.nome;

// para saber, caso eu importar novamente como o const com seu objeto, posso importar somente assim:
// require('./funcoes-auxiliares'); // pois desta forma ele guarda como se fosse um cache
// pegando diretamente os valores guardados no module.export = {gets, print}