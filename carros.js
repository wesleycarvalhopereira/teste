class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    // Acima é tributos
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const i30 = new Carro('bmw', 'preto', (1/6).toFixed(2));
console.log(i30.calcularGastoDePercurso(70, 5).toFixed(2));

const picasso = new Carro('Citroen', 'preto', 1/8);
console.log(picasso.calcularGastoDePercurso(70, 5).toFixed(2));