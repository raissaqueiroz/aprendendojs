function contar() {
    let ini = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let passo = document.querySelector('#txtp');

    let res = document.querySelector('#res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossivel contar";
    } else if (ini.value.length == fim.value.length || fim.value.length == passo.value.length) {
        res.innerHTML = "Impossivel contar";
    } else {

        res.innerHTML = "Contando: ";

        let nInicio = Number(ini.value);
        let nFim = Number(fim.value);
        let nPasso = Number(passo.value);

        for (let i = nInicio; i < nFim; i += nPasso) {
            res.innerHTML += `${i} &#128512;`;
        }
        for (let i = nInicio; i > nFim; i -= nPasso) {
            res.innerHTML += `${i} &#128512;`;
        }
    }

}