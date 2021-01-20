function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        img.src = 'img/manha.jpg';
        document.body.style.background = "rgb(239 235 220)"
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.jpg';
        document.body.style.background = "rgb(228 127 88)"
    } else {
        img.src = "img/noite.jpg";
        document.body.style.background = "rgb(81 81 84)";
    }
}

