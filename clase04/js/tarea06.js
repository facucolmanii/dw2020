function generarAleatorio(minímo, maximo){ //Creo Mi Funcion de Generar numero aleatorio.
  return Math.floor(Math.random() * (maximo-minímo) + minímo);
}


var origen = new Array(); //Creo mi Array origen.
var destino = []; //Creo mi array destino.

for( var i=0; i<1; i++){ //Paseo por mi Array
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    origen.unshift(generarAleatorio(0, 100)); //Le doy el Numero aleatorio
    console.log("Las Tablas son: ");
    console.log("Origen= " + origen); //Imprimo por consola la Tabla Origen.
    console.log(" ");
    origen.sort(); //Ordeno la tabla origen.
    destino = origen.sort(); //le doy a destino los parametros que tiene la tabla origen.
    console.log("Destino: "+ destino); //Imprimo la tabla Destino.
 }
