/*
 *  JS PRÁTICO - TABUADA
 *  @author Raissa Queiroz
 *
 */


 for(let j = 2; j < 11; j++){
     document.write("<p>Tabuada de "+j+"</p>");
     for(let i = 1; i < 11; i++){
        document.write(j + " x " + i + " = " + j*i + "<br/>");
     }
    document.write("<hr>");
 }