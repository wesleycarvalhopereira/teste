function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}
// module.exports = {
//     gets: gets,
//     print: print
// }; melhor o exemplo abaixo da linha 12
module.exports = {gets, print};
// ou direto à exemplo para gets
// module.exports.gets = gets;