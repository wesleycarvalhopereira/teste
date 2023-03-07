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



//     nome;
//     idade;
//     anoDeNascimento;
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//         this.anoDeNascimento = 2023 - idade;
//     }

//     descrever() {
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// }

// const juliana = new pessoa("Juliana R. F. Pereira", 50);
// const wesley = new pessoa("Wesley C. Pereira", 48);

// juliana.descrever();
// wesley.descrever();
// console.log(juliana);

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

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const wesley = new pessoa('Wesley', 48);
const juliana = new pessoa('Juliana', 49);

compararPessoas(wesley, juliana);