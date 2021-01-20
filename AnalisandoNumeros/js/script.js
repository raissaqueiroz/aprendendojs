var botaoAdd = document.querySelector("#add");
botaoAdd.addEventListener('click', adicionar);

var botaoFin = document.querySelector("#finalizar");
botaoFin.addEventListener('click', finalizar);

var valores = [];

function adicionar() {
    var numTxt = document.querySelector("#txtn");
    var numInt = Number(numTxt.value);
    var numExistente = false;

    //Verifica se o número já esta no array
    for (let pos in valores) {
        if (numInt == valores[pos]) {
            numExistente = true
        } else {
            numExistente = false
        }
    }

    //Verifica o número digitado
    if (numInt <= 0 || numInt > 100) {
        alert("Favor digitar um número válido");
    } else if (numExistente == true) {
        alert("O número já esta na lista")
    } else {
        valores.push(numInt);
        var select = document.querySelector("#numeros");
        var item = document.createElement('option');
        item.text = `Valor ${numInt} adicionado`;
        select.appendChild(item);
    }
    //Apaga os campos e foca novamente no input
    numTxt.value = ''
    numTxt.focus();
}

function finalizar() {
    var total = valores.length;

    if (total == 0) {
        alert("Adicione um número");
    } else {

        //Obtém o maior e menor número presente no array
        var menor = Math.min.apply(null, valores);
        var maior = Math.max.apply(null, valores);

        var res = document.querySelector("#res");
        var paragrafo = document.createElement('p');

        //Soma todos os números do array e calcula a média
        var soma = 0
        for (let pos in valores) {
            soma += valores[pos];
        }
        var media = soma / total;

        paragrafo.innerText = `Ao todo temos ${total} números cadastrados \n O menor valor é ${menor} \n O maior valor é ${maior} \n A soma de todos é: ${soma} \n A média é: ${media}`;
        res.appendChild(paragrafo);
    }


}