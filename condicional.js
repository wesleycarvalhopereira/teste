// const numero = 10;
// const numeroPar = (numero % 2) === 0;

// if (numeroPar) {
//     console.log ('Par');
// } else {
//     console.log ('Ímpar');
// }

// const numero = 10;

// if ((numero % 2) === 0) {            aqui coloco direto a fórmula, veja linha 3
//     console.log ('Par');
// } else {
//     console.log ('Ímpar');
// }

const numero = 10;
const numeroDivisivelPor5 = numero % 5 === 0;

if (numero === 0) {
  console.log("O número é inválido");
} else if (numeroDivisivelPor5) {
  console.log("Sim");
} else {
  console.log("Não");
}

// == igual, mas ignora o tipo, ex: 0 = "0"(String)
// === igual somente do mesmo tipo 0 = 0
// ! é uma negação, neste caso eu inverto a resposta.
