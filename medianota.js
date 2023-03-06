const nota1 = 5;
const nota2 = 4;
const nota3 = 2;

const notamedia = (nota1 + nota2 + nota3) / 3;
console.log(notamedia.toFixed(1));

if (notamedia < 5) {
  console.log("Sua nota é " + notamedia.toFixed(1) + ", você está reprovado.");
} else if (notamedia >= 5 && notamedia < 7) {
  console.log("Recuperação");
} else {
  console.log("Passou de semestre");
}
