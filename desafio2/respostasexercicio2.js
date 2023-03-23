const {gets, print} = require('./exercicio2');
const n = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;        
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;      
        }
    }
}

print(maiorNumeroPar);
print(menorNumeroImpar);

// GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT 

// const n = parseInt(gets());
// let maiorNumeroPar = -Infinity;
// let menorNumeroImpar = Infinity;

// for (let i = 0; i < n; i++) {
//     const numero = parseInt(gets());
    
//     if (numero % 2 === 0 && numero > maiorNumeroPar) {
//         maiorNumeroPar = numero;
//     } else if (numero % 2 !== 0 && numero < menorNumeroImpar) {
//         menorNumeroImpar = numero;
//     }
// }

// console.log(maiorNumeroPar);
// console.log(menorNumeroImpar);