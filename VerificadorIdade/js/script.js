function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');

  if (!fano.value || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {

    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');

    img.setAttribute('id' , 'foto');

    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src' , 'img/bebe-menino.png');
      } else if (idade < 21 ) {
        img.setAttribute('src' , 'img/jovem-homem.png');
      } else if (idade < 50) {
        img.setAttribute('src' , 'img/adulto-homem.png');
      } else {
        img.setAttribute('src' , 'img/senhor-homem.png');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src' , 'img/bebe-menina.png');
      } else if (idade < 21 ) {
        img.setAttribute('src' , 'img/jovem-mulher.png');
      } else if (idade < 50) {
        img.setAttribute('src' , 'img/adulta-mulher.png');
      } else {
        img.setAttribute('src' , 'img/senhora-mulher.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `<span>${genero} com ${idade} anos</span>`;
    res.appendChild(img)
  }
}

