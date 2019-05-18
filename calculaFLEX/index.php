<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <title> CURSO JS PRÁTICO - CALCULADORA FLEX </title>
    </head>
    <body onload="neutro()">
        <h1> CURSO JS PRÁTICO - CALUCLADORA FLEX </h1>
        <div id="img"></div>
        <input type="text" id="etanol" />
        <input type="text" id="gasolina" />
        <button  id="vantagem" onclick="vantagem()"> Vantagem </button>
        <button  id="limnpar" onclick="reset()"> Limpar </button>
        <script>
            function neutro(){
                document.getElementById("img").innerHTML = "<img src='img/neutro.png'/>";
            }
            function vantagem(){
                var gasolina = document.getElementById("gasolina");
                var etanol = document.getElementById("etanol");
                // console.log(gasolina.value());
                if(gasolina.value > etanol.value){
                    document.getElementById("img").innerHTML = "<img src='img/etanol.png'/>";
                } else if(gasolina.value < etanol.value){
                    document.getElementById("img").innerHTML = "<img src='img/gasolina.png'/>";
                } else {
                    document.getElementById("img").innerHTML = "<img src='img/neutro.png'/>";
                }
            }

            function reset(){
                document.getElementById("gasolina").value = "";
                document.getElementById("etanol").value = "";
                document.getElementById("img").innerHTML = "<img src='img/neutro.png'/>";
            }
        </script>
    </body>
</html>