window.alert ("Vamos determinar el costo de una llamada telefónica con el tiempo de la llamada y en el costo por minuto.!")
var tiempo = parseInt(prompt("Ingresa el tiempo que llamas"));
var costoMinuto = parseInt(prompt("Ingresa el costo del minuto"));
var costoLlamada= tiempo * costoMinuto;
document.write ("El Costo de la llamada es " + costoLlamada + " soles");
