// const precoCombustivel = 5.79;
// const kmPorLitros = 10;
// const distanciaEmKm = 100;
// const litrosConsumidos = distanciaEmKm / kmPorLitros;
// const valorGasto = litrosConsumidos * precoCombustivel;
// console.log(valorGasto.toFixed(2));

// ---------- end ----------

// const Etanol = 3.8;
// const Gasolina = 5.79
// const tipoCombustivel = Etanol
// const kmPorLitros = 10;
// const distanciaEmKm = 100;
// const litrosConsumidos = distanciaEmKm / kmPorLitros;
// const valorGastoEtanol = litrosConsumidos * Etanol;
// const valorGastoGasolina = litrosConsumidos * Gasolina;

// if (tipoCombustivel == Etanol) {
//     console.log (valorGastoEtanol.toFixed(2));
// } else {
//     console.log (valorGastoGasolina.toFixed(2));
// }

// ---------- end ----------

// Resuldado exercício acima, visão do professor

const Etanol = 3.8;
const Gasolina = 5.79;
const tipoCombustivel = "Gasolina";
const kmPorLitros = 10;
const distanciaEmKm = 100;
const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel == "Etanol") {
  const valorGasto = litrosConsumidos * Etanol;
  console.log(valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * Gasolina;
  console.log(valorGasto.toFixed(2));
}
