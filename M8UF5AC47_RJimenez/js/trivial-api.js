function boton(a){
    if(a.value == localStorage.getItem("res1")){
        alert("Correcte")
    }
    else if(a.value == localStorage.getItem("res2")){
        alert("Correcte")
    }
    else if(a.value == localStorage.getItem("res3")){
        alert("Correcte")
    }
    else if(a.value == localStorage.getItem("res4")){
        alert("Correcte")
    }
    else if(a.value == localStorage.getItem("res5")){
        alert("Correcte")
    }
    else if(a.value == localStorage.getItem("res6")){
        alert("Correcte")
    }
    else{
        alert("Incorrecte")
    }
}




const urlnombre = new URLSearchParams(window.location.search).get("nomusu");
var contingut = document.querySelector('#contingut') 
function agafar() { 
    fetch('https://randomuser.me/api/') 
    .then(res => res.json()) 
    .then(data => { 
    console.log(data.results['0']) 
    contingut.innerHTML = ` 
    <img src="${data.results['0'].picture.large}" 
    width="100px" class="img-fluid rounded-circle"> 
    <p>Nombre:</p> 
    `+ urlnombre; 
})
    localStorage.setItem("res1", "1-1")
    localStorage.setItem("res2", "2-1")
    localStorage.setItem("res3", "3-3")
    localStorage.setItem("res4", "4-1")
    localStorage.setItem("res5", "5-1")
    localStorage.setItem("res6", "6-1")
} 

