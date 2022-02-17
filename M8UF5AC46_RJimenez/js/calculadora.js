function operacion(a) {
    if(a.value == 1) {
        document.calc.pantalla.value += "1";
    } else if(a.value == 2) {
        document.calc.pantalla.value += "2";
    } else if(a.value == 3) {
        document.calc.pantalla.value += "3";
    } else if(a.value == 4) {
        document.calc.pantalla.value += "4";
    } else if(a.value == 5) {
        document.calc.pantalla.value += "5";
    } else if(a.value == 6) {
        document.calc.pantalla.value += "6";
    } else if(a.value == 7) {
        document.calc.pantalla.value += "7";
    } else if(a.value == 8) {
        document.calc.pantalla.value += "8";
    } else if(a.value == 9) {
        document.calc.pantalla.value += "9";
    } else if(a.value == 0) {
        document.calc.pantalla.value += "0";
    }else if(a.value == "+"){
        document.calc.pantalla.value += "+"; 
    }else if(a.value == "-"){
        document.calc.pantalla.value += "-"; 
    }else if(a.value == "*"){
        document.calc.pantalla.value += "*"; 
    }else if(a.value == "="){
        document.calc.pantalla.value=eval(document.calc.pantalla.value); 
    }else if(a.value == "/"){
        document.calc.pantalla.value += "/";
    }else if(a.value == ","){
        document.calc.pantalla.value += ".";  
    }else if(a.value == "C"){
        document.calc.pantalla.value = ""; 
    }
}