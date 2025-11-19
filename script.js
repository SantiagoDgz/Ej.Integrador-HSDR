function calcular(){
    
    var total = 0;

    
    
    if (document.getElementById("marca")){
        if (document.getElementById("marca").value == "honda") total = 60000;
        else if (document.getElementById("marca").value == "nissan") total = 50000;
        else if (document.getElementById("marca").value == "toyota") total = 40000;
        else if (document.getElementById("marca").value == "mazda") total = 65000;
        else if (document.getElementById("marca").value == "hyundai") total = 55000;
        else if (document.getElementById("marca").value == "kia") total = 45000;
        else if (document.getElementById("marca").value == "mitsubishi") total = 50000;
        else if (document.getElementById("marca").value == "suzuki") total = 35000;
        else total = 0;
    }

    
    if (document.getElementById("aire")){
        if (document.getElementById("aire").checked) total = total + 5000;
    }
    if (document.getElementById("GPS")){
        if (document.getElementById("GPS").checked) total = total + 5000;
    }
    if (document.getElementById("seguro")){
        if (document.getElementById("seguro").checked) total = total + 5000;
    }
    if (document.getElementById("quemacocos")){
        if (document.getElementById("quemacocos").checked) total = total + 5000;
    }
    if (document.getElementById("camara-trasera")){
        if (document.getElementById("camara-trasera").checked) total = total + 5000;
    }
    if (document.getElementById("camara-frontal")){
        if (document.getElementById("camara-frontal").checked) total = total + 5000;
    }

    
    if (document.getElementById("financiamiento2")){
        if (document.getElementById("financiamiento2").checked) total = total + (total * 0.10);
    }

    alert("Total: MXN " + total);

    return false; 
}
