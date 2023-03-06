// const peso = 86;
// const altura = 1.7;
// // const imc = peso / (altura*altura);
// const imc = peso / Math.pow(altura,2);
// console.log(imc.toFixed(2));
// // console é um objeto e log é um método do console, a mesma coisa para Math.pow

// if (imc < 18.5) {
//     console.log("Seu IMC é de " + imc.toFixed(2) + ", você está muito abaixo do peso");
// } else if (imc >=18.5 && imc < 25) {
//     console.log("Seu IMC é de " + imc.toFixed(2) + ", você está peso normal, vamos melhorar mais um pouco? ;) ");
// } else if (imc >=25 && imc < 30) {
//     console.log("Seu IMC é de " + imc.toFixed(2) + ", você está acim do peso e não estou gostando disto.");
// } else if (imc >=30 && imc < 40) {
//     console.log("Seu IMC é de " + imc.toFixed(2) + ", você está obeso, vamos marcar um médico.");
// } else {
//     console.log("Seu IMC é de " + imc.toFixed(2) + ", você está com obesidade grave, precisamos conversar e ver com urgência um médico.");
// }
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}
// Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();