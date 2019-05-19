<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <title> CURSO JS PRÁTICO - JOKENPÔ</title>
    </head>
    <body align="center">
        <h1> CURSO JS PRÁTICO - JOKENPÔ </h1>
        <h3>Jogador:</h3>
        <img src="img/pedra.png" alt="Pedra"/>
        <img src="img/papel.png" alt="Papel"/>
        <img src="img/tesoura.png" alt="Tesoura" />
        <form action="" method="">
            <input type="radio" name="grupo" id="pedra"/>Pedra
            <input type="radio" name="grupo" id="papel" />Papel
            <input type="radio" name="grupo" id="tesoura"/>Tesoura
            <br><br>
            <button  type="button" onclick="jogar()"> JOGAR </button>
            <button  type="reset" onclick="resetar()"> RESETAR </button>
        </form>
        <hr>
        <h3>Computador:</h3>
        <img src="img/pc.png" alt="PC" id="pc"/>
        <hr>
        <h3 id="placar"></h3>
        <script type="text/javascript" src="js/main.js"></script>
    </body>
</html>