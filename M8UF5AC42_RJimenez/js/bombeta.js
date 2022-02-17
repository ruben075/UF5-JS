function luz(a){
    a.src ="img/llumon.gif";
}
function noluz(b){
    b.src ="img/llumoff.gif";
}
function roto(c){
    c.src ="img/llumbreak.gif";
}
document.addEventListener('keydown', luz2);
var luz1 =0;
var luz2 =0;
var luz3 =0;
function luz2(d){
    if (d.keyCode ==49) {
        if (luz1 ==0){
            document.getElementById("a1").src= "img/llumon.gif";
            document.getElementById("boton1").innerHTML="1";
            luz1 =1;
        }
        else if (luz1 ==1){
            document.getElementById("a1").src= "img/llumoff.gif";
            document.getElementById("boton1").innerHTML="";
            luz1 =0;  
        }
    }
    if (d.keyCode ==50) {
        if (luz2 ==0){
            document.getElementById("a2").src= "img/llumon.gif";
            document.getElementById("boton2").innerHTML="2";
            luz2 =1;
        }
        else if (luz2 ==1){
            document.getElementById("a2").src= "img/llumoff.gif";
            document.getElementById("boton2").innerHTML="";
            luz2 =0;  
        }
    }
    if (d.keyCode ==51) {
        if (luz3 ==0){
            document.getElementById("a3").src= "img/llumon.gif";
            document.getElementById("boton3").innerHTML="3";
            luz3 =1;
        }
        else if (luz3 ==1){
            document.getElementById("a3").src= "img/llumoff.gif";
            document.getElementById("boton3").innerHTML="";
            luz3 =0;  
        }
    }
}