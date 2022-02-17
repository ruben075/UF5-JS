function com(a){
    hola1 = document.getElementById("a50").value;
    hola2 = document.getElementById("a20").value;
    if (hola1 > 17 || localStorage.getItem('nom') == hola2 ){
        localStorage.setItem('edat' , hola1);
        localStorage.setItem('nom' , hola2);
        window.open("../trivial-api.htm?nomusu=" + hola2);
    }
    else if (hola1 <18){
        alert("no tens la edat minima per entrar")
    }      
}