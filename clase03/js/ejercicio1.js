var i;
var j;
j=prompt("Ingrese un valor del 1 al 10: ");
j=parseInt(j);
console.log("La tabla de multiplicar del: "+ j);
  for(i=1; i<11; i++){
    var resultado=i*j;
    console.log(i + " X " + j + " = " + resultado);
}

console.log("---------------------------------------");
