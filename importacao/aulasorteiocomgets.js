// Tem vários alunos e cada foi sorteado com vários números
// Faça um programa q receba vários nºs e mostre o valor maior sorteado
// const entradas = [10, 5, 50, 369, -500, 98, 23, 7, 98, 23, 33, 44, 100, 1, 7];
const entradas = [10, 5, 50, 369, -500, 98, 23, 7, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    // i = i+1; ou
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};