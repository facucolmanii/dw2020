var j;
var k;
j=prompt("Ingrese un valor del 1 al 10");
j=parseInt(j)
console.log("La Tabla del numero: "+j);
for(k=1; k<11; k++){
  resultado=j*k;
  console.log(j+" X " + k +" = " + resultado);
}


console.log("---------------------------------------------------")
var l;
var m;
l=prompt("Ingrese un Valor del 1 al 10");
l=parseInt(l)
if(j<l){
  console.log("La Tabla del numero: "+l);
  for(m=1; m<11; m++){
    resultado=l*m;
    console.log(l + " X " + m + " = " + resultado);
  }
}else{
  console.log("No es posible procesar la petición.......")
}
