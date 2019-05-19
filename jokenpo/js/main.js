/*
 *  JS PRÁTICO - JOKENPÔ
 *  @author Raissa Queiroz
 *
 */

 function jogar(){
    //validando
    if(document.getElementById("pedra").checked == false && document.getElementById("tesoura").checked == false && document.getElementById("papel").checked == false){
        alert("Você precisa selecionar uma das opções :/");
    } else {
        var sorteio = Math.floor(Math.random() * 3);

        //Mudando imagem do pc aleatóriamente
        switch(sorteio){
            case 0:
                document.getElementById("pc").src = "img/pcpedra.png";
                break;
            case 1:
                document.getElementById("pc").src = "img/pcpapel.png";
                break;
            case 2:
                document.getElementById("pc").src = "img/pctesoura.png";
                break;
            default:
                break;             
        }
        //verificando vencedor
        if((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) || (document.getElementById("tesoura").checked == true && sorteio == 2)){
            //empate
            document.getElementById("placar").innerHTML = "EMPATE!";
        } else if ((document.getElementById("pedra").checked == true && sorteio == 1) || (document.getElementById("papel").checked == true && sorteio == 2) || (document.getElementById("tesoura").checked == true && sorteio == 0)){
            //pc ganha
            document.getElementById("placar").innerHTML = "COMPUTADOR VENCEU!";
        } else {
            //jogador ganha
            document.getElementById("placar").innerHTML = "JOGADOR VENCEU!";
        }


    }
 }

 function resetar(){
    document.getElementById("pc").src = "img/pc.png";
    document.getElementById("placar").innerHTML = "";
 }