const {gets, print} = require('./exercicio1');

const media = gets();

if (media >= 0 && media < 5) {
    print("Sua nota é " + media + ", você está reprovado.");
} else if (media >= 5 && media < 7) {
    print("Recuperação");
} else if (media >= 7) {
    print("Passou de semestre");
} else {
    print('Número Inválido');
}