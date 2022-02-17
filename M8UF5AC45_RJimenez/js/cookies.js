function gu(){
    sessionStorage.setItem('nom1', document.getElementById("a5").value);
    sessionStorage.setItem('cognom1', document.getElementById("a10").value); 
    sessionStorage.setItem('contra', document.getElementById("a1").value); 
    sessionStorage.setItem('nom2', document.getElementById("a4").value); 
    }
function re(){
    document.getElementById("a5").value = sessionStorage.getItem('nom1');
    document.getElementById("a10").value = sessionStorage.getItem('cognom1');
    document.getElementById("a4").value = sessionStorage.getItem('nom2');
}
function bo(){
    sessionStorage.clear();
}
function com(){
    if( document.getElementById("a1").value == sessionStorage.getItem('contra') && document.getElementById("a1").value == document.getElementById("a2").value && document.getElementById("a2").value == sessionStorage.getItem('contra')){
        alert("Benvingut"+" "+ a5.value + " " + a10.value )
    }
    else{
        alert("L'usuari i password no son correctes")
    }
}
