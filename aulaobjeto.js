// const wesley = {
//     nome: 'Wesley C Pereira',
//     idade: 48
// };

// wesley.altura = 1.70;


// console.log(wesley.nome);
// console.log(wesley.idade);
// console.log(wesley.altura);

// const pessoa = {
//     nome: 'Wesley C. Pereira',
//     idade: 48,

//     descrever: function () {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }; 

// pessoa.nome = 'Juliana';
// pessoa.idade = 48



// pessoa.descrever = function () {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();



// const atributo = 'idade';

// console.log(pessoa[atributo]);


// console.log(pessoa['nome']);

// class pessoa {
//     nome;
//     idade;
//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// const juliana = new pessoa();
// juliana.nome = "Juliana R. F. Pereira";
// juliana.idade = 49;

// const wesley = new pessoa();
// wesley.nome = "Wesley C. Pereira";
// wesley.idade = 48;

// console.log(juliana);
// console.log(wesley);

// juliana.descrever();
// wesley.descrever();



class pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const juliana = new pessoa("Juliana R. F. Pereira", 50);
const wesley = new pessoa("Wesley C. Pereira", 48);

juliana.descrever();
wesley.descrever();
console.log(juliana);