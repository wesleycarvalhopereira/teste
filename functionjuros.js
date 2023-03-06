function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function usarDinheiroPix(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function parcelarEmDuasVezes(valor) {
    return (valor / 2);
}

function parcelarAcimaDeDuasVezes(valor, parcelas) {
    return (valor / parcelas * 1.1);
}

const precoEtiqueta = 100;
const formaPagamento = 4;
const parcelas = "7"

if (formaPagamento === 1) {
    console.log("O valor com débito à vista ficará em R$ " + (aplicarDesconto(precoEtiqueta, 10)).toFixed(2));
} else if ((formaPagamento === 2)) {
    console.log("O valor com pagamento em dinheiro ou no PIX, tem desconto de 15%, ficando em R$ " + (usarDinheiroPix(precoEtiqueta, 15)).toFixed(2));
} else if (formaPagamento === 3) {
    console.log("O valor da parcela em duas vezes, ficará em R$ " + (parcelarEmDuasVezes(precoEtiqueta).toFixed(2)));
} else {
    console.log("O valor parcelado em " + (parcelas) + " vezes, terá um acréscimo de 10%/parcela, o valor ficará em R$ " + (parcelarAcimaDeDuasVezes(precoEtiqueta, parcelas)).toFixed(2));
}