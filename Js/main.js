
/*
console.log("Hola mundo como estan");
var variable=true;
const constante=5;
console.log(constante);
variable=false;
console.log(variable);


//Operadores Arismeticos

var Num1 = 22;
var Num2 = 46;
var vNom="Jorge Andres";
var vApellidos = "Acuña Aguilera";
console.log("Suma:", Num1+Num2);
console.log("Resta:", Num1-Num2);
console.log("Division: ",Num1/Num2);
console.log("Multiplicacion: ", +Num1*Num2);
console.log("Nombre Completo: " +vNom+" "+vApellidos);
console.log("Resta de division:", Num1%2);


//Sentencias Condicionales

if (Num1%2 == 0){
    console.log("El", Num1,"Es un numero par");
}

else {
    console.log("El", Num1,"Es un numero Impar");
}

//Operadores de comparacion

var vGlosa ="El numero: ";
if (Num1>Num2){
    console.log(vGlosa, Num1, "Es mayor que ", Num2);
}
else if (Num1<Num2){
    console.log(vGlosa, Num2, "Es mayor que ", Num1);
}
else {
    console.log(vGlosa, Num1, " Es igual a ", Num2 );
}


//SUMAR DOS NUMEROS 


*/

function Suma(){

    var vfNum1 = document.getElementById("vNum1").value;
    var vfNum2 = document.getElementById("vNum2").value;

    if(vfNum1==="" || vfNum2===""){
        alert("Debe completar todo los datos...");
    }
    else{
        var vfSuma = parseInt(vfNum1)+parseInt(vfNum2);
        document.getElementById("vResultado").value = vfSuma
    }

} 