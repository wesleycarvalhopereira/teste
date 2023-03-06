// const wesley = {
//     nome: 'Wesley C Pereira',
//     idade: 48
// };

// wesley.altura = 1.70;


// console.log(wesley.nome);
// console.log(wesley.idade);
// console.log(wesley.altura);

const pessoa = {
    nome: 'Wesley C. Pereira',
    idade: 48,

    descrever: function () {
        console.log('Meu nome é ${} e minha idade é ${this.idade}');
    }
}; 

pessoa.descrever();