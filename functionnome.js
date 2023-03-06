function escreverNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
    if (idade >=18) {
        console.log(escreverNome('Wesley') + ' e sou maior de idade.');        
    } else {
        console.log('Você é menor de idade.');
    }
}
verificarIdade('48');