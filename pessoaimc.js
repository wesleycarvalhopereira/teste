class Pessoa {
    nome;
    peso;
    altura;
    // Acima é tributos
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
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
    // Acima, classificarimc e calcularimc é um método
}

const wesley = new Pessoa('Wesley', 86, 1.7);
console.log(wesley.classificarImc());

const juliana = new Pessoa('Juliana', 59, 1.5);
console.log(juliana.classificarImc());
