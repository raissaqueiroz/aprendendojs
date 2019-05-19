/*
 *  JS PRÁTICO - SLIDE SHOW
 *  @author Raissa Queiroz
 *
 */

 var intervalo = 3000;

 function slide1(){
    document.getElementById("slide").src = "img/banner1.jpg";
    setTimeout("slide2()",intervalo);
 }
 function slide2(){
    document.getElementById("slide").src = "img/banner2.jpg";
    setTimeout("slide3()",intervalo);
 }
 function slide3(){
    document.getElementById("slide").src = "img/banner3.jpg";
    setTimeout("slide1()",intervalo);
 }

