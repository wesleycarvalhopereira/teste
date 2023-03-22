const {gets, print} = require('./aulasorteiocomgets');

// const numeroSorteados = [];

// for (let i = 0; i < 5; i++) {
//     const numeroSorteado    = gets();
//     numeroSorteados.push(numeroSorteado);  
// }

// let maiorValor = 0;

// for (let i = 0; i < numeroSorteados.length; i++) {
//     const numeroSorteado = numeroSorteados[i];
//     if (numeroSorteado > maiorValor) {
//         maiorValor = numeroSorteado;        
//     }
// }
// print(maiorValor);
const quantidadeDeAlunos = gets();
let maiorValorEncontrado = -Infinity; // no lugar de infinity posso colocar 0

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;        
    }
}

print(maiorValorEncontrado);

// GPT
// const numeroSorteados = [];

// for (let i = 1; i <= 5; i++) {
//   const numeroSorteado = gets();
//   numeroSorteados.push(numeroSorteado);  
// }

// let maiorValor = Math.max(...numeroSorteados);

// console.log(maiorValor);

