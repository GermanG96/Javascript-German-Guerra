

//Condicional

let precio = 500;

if (precio < 50) {
    alert ("el precio es menor que 50");
}

else if (precio < 100) {
    alert ("el precio es menor que 100");
}

else if (precio < 300) {
    alert ("el precio es menor que 300");
}

else {
    alert ("el precio es mayor que 500");
}

//Ciclos

let cantidad = prompt('ingresar cantidad de repeticiones');
let texto =prompt('ingresar texto a repetir');
for (let index = 0; index < cantidad; index++) {
    console.log(texto);
    
}

//Funciones

const cotizacionDolar = 150;
const cotizarDolar = (pesos) => pesos / cotizacionDolar;
const cotizarPesos = (dolar) => dolar * cotizacionDolar;
let seleccion = prompt("seleccionar cotizacion \n 1 - dolar a pesos \n 2 -  pesos a dolar ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarDolar(valor));
        break;
    default:
        break;
}

