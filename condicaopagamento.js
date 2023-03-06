const precoetiqueta = 100;
const formaPagamento = 1;

if (formaPagamento === 1) {
    console.log("O valor com débito à vista ficará em " + (precoetiqueta - (precoetiqueta * .1)).toFixed(2));
} else if ((formaPagamento === 2)) {
    console.log("O valor com pagamento em dinheiro ou no PIX, tem desconto de 15%, ficando em " + (precoetiqueta - (precoetiqueta * .15)).toFixed(2));
} else if (formaPagamento === 3) {
    console.log("O valor da parcela em duas vezes, ficará em " + (precoetiqueta / 2).toFixed(2));
} else {
    console.log("O valor parcelado acima de duas vezes, terá um acréscimo de 10%/parcela, o valor ficará em " + (precoetiqueta * 1.1).toFixed(2));
}