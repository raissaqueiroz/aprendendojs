/*
 *  JS PRÁTICO - CALCULA FLEX 
 *  @author Raissa Queiroz
 *
 */

 var etanol, gasolina;

 function calcular(){
     //Convertendo Variáveis pro tipo numérico
     etanol   = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
     gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

     //calculando
     if(etanol < 0.7 * gasolina){
        document.getElementById("status").src="img/etanol.png";
     } else{
        document.getElementById("status").src="img/gasolina.png";
     }
     
 }

 function resetar(){
    document.getElementById("status").src="img/neutro.png";
 }