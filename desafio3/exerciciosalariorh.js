const {gets, print} = require('./salariorh');

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    
    if (salario <= 1100) {
        return 5;
    } else if (salario > 1100 && salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorSalario)
const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto)
const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir);

// GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT GPT 
// const salario = parseFloat(gets());
// const beneficios = parseFloat(gets());

// function calcularImposto(salario) {
//   if (salario <= 1100) {
//     return salario * 0.05;
//   } else if (salario <= 2500) {
//     return salario * 0.1;
//   } else {
//     return salario * 0.15;
//   }
// }

// const percentualImposto = calcularImposto(salario);
// const salarioLiquido = salario - percentualImposto + beneficios;

// console.log(salarioLiquido.toFixed(2));