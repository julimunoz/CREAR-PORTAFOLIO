// traigo el array con las palabras para jugar

var palabras = JSON.parse(localStorage.getItem('myArray'));

//defino las variables min y maximo para realizar la escogencia de la palabra
var min = 0;
var max = palabras.length;
var palabra;
var palabraAleatoria = [];
var letraNueva;
var letrasAcertadas = 0;
var letrasFalladas = 0;
var otrasLetras = "";
var palabraNueva;
var entrada = document.getElementById("ingresoletras");
var valorComparar = [];
var acumulaLetra;
var cadena = "";


// funcion que genera un numero aleatorio entre la posicion 0 y la maxima del array

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max+1) - min) + min;
    
}

// funcion para asignar una obtener una palabra de forma aleatoria del array

function generarPalabraAleatoria(){

    var aleatorio = getRandomInt(min,max);
    //console.log(aleatorio);
    palabra = palabras[aleatorio];
    //console.log(palabra);
    return palabra;
}


/*function crearInputs(){

var input = document.createElement("input");
input.type = "text";
input.className = "css-class-name"; // set the CSS class
prueba.appendChild(input); // put it into the DOM

}*/


/* esta funcion permite con el ingreso de letras al input hacer comparaciones,
verificar si es letra o no, si ya se ingreso, etc. funciona con el evento "input"
que al cambiar la etiqueta input ejecuta la funcion anonima*/

entrada.addEventListener("input", function(){

    var letra = entrada.value.toUpperCase().charCodeAt(0); /* convierto a mayusculas
    y obtengo el codigo ascii del caracter ingresado por teclado al input */

    //console.log(letra);
    
    /*realizo comparacion mediante el codigo ascii si es una letra o no, la A equivale
    a 65 y la Z a 90, cualquier valor por fuera de estos no sera una letra mayuscula*/

    if(letra > 64 && letra < 91){

        
                acumulaLetra = String.fromCharCode(letra); // asi paso de ascci a caracter
                //console.log(acumulaLetra);
                
                // con includes verifico si la nueva letra ingresada ya se encuentra en la cadena
                if(cadena.includes(acumulaLetra)){

                    cadena = cadena // si ya esta no modifico la cadena
                    //console.log("YES");
                    
                }else {
                   // console.log("NOT")
                    cadena = cadena + acumulaLetra; // si no esta la agrego a la cadena
                    comparar(acumulaLetra);
                    
                }
            
        }

        console.log(cadena);

        //document.getElementById("sololetras").value = valorComparar;
    
    // aqui limpio el input para ingresar un nuevo caracter      
    document.getElementById("ingresoletras").value = ""; 
    
});


// funcion para de acuerdo al tamaño de la palabra "mostrar" solo los inputs necesarios

function visualizarInputs(palabra) {

    
    //var prueba;

    palabraAleatoria = palabra.split("");
    // console.log(palabraAleatoria);

    for(var j = 1; j < 9; j++){

        //prueba = '"' + "letter" + j + '"'.toString();
       // console.log(prueba);
       //document.getElementById(prueba).style.display = 'none'; // hide
        // de esta forma no me funicono, no se porque.....

        document.getElementById("letter"+j).style.display = 'none'; // hide

    }

    for(var i = 1; i < palabra.length +1; i++){

        document.getElementById("letter"+i).style.display = ''; // show
        document.getElementById("letra"+i).style.color = "white";
        document.getElementById("letra"+i).value = palabraAleatoria[i-1];

    }

}


/* esta funcion compara la letra ingresada con cada posicion mediante un for,
si esta en la palabra la muestra en su posicion cambiando el color de la letra de
ese input, si no suma loserrores para compararlos */

function comparar (letraNueva) {

    
    for(var i = 1; i < palabraAleatoria.length+1; i++) {
        
        if(letraNueva == palabraAleatoria[i-1]) {
            document.getElementById("letra"+i).style.color = "blue"; // cambia el color de la letra que estaba blanca para que no se viera
            letrasAcertadas = letrasAcertadas+ 1;
            // console.log(letrasAcertadas);

// evalua si el numero de aciertos es igual a la longitud de la palabra
            if(letrasAcertadas == palabraAleatoria.length){ 

                // console.log("acertaste");
                //asi cargo un mensaje en la etiqueta <p id="mensaje"
                document.getElementById("mensaje").style.color = "green";
                document.getElementById("mensaje").innerHTML = "Ganaste felicidades!"
                
            } 

        }
        
    }

    // verifica si el array no contiene la palabra y suma las fallas
    if(!(palabraAleatoria.includes(letraNueva))){

        letrasFalladas = letrasFalladas + 1;
        dibujarAhorcado();
        //console.log(letrasFalladas);
        otrasLetras = otrasLetras + letraNueva;
        document.getElementById("otherletter").value = otrasLetras;

// al llegar a 9 (se podria colocar una variable, pero para este ej son 9) se termina el juego
        if(letrasFalladas == 9){

            //console.log("fallaste");
            document.getElementById("mensaje").style.color = "blue";
            document.getElementById("mensaje").innerHTML = "Fin del juego!"

        }
    }

}

// esta funcion la uso para que al cargar la pagina genere la palabra aleatoria y visualize los inputs requeridos

function ahorcado() {

    var palabraAdivinar = generarPalabraAleatoria();
    visualizarInputs(palabraAdivinar);
    crearDibujo();
    
}

/*aqui genero el dibujo, primero defino un area de dibujo con canvas, luego creo las
funciones dibujar linea y dibujar circulo y una funcion para ir dibuando de acuerdo
al numero de fallos */ 

//defino las variables de canvas.

var pantalla = document.querySelector("canvas");  // esta instruccion conecta las etiquetas html con javascript
var pincel = pantalla.getContext("2d");

// creo un espacio para el dibujo
function crearDibujo() {
    pincel.fillStyle = "white";
    pincel.fillRect(0, 0, 300, 150);
    dibujaLinea(50,200,150,150);

}

// funcion para crear linas, con eso se dibuja el muñeco
function dibujaLinea(x1,x2,y1,y2){

    pincel.fillStyle = "blue";
    pincel.lineWidth = 2;
	pincel.beginPath(); // inicie un grafica
	pincel.moveTo(x1,y1); // punto de inicio de un nuevo camino, la mitad en el eje x y la mitad en el eje y
	pincel.lineTo(x2,y2);
    pincel.stroke();

}

// funcion que dibuja un circulo, para la cabeza del muñeco

function dibujarCirculo(x, y, radio) {

    pincel.fillStyle = "blue";
    pincel.lineWidth = 2;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.stroke();
    
}

// esta fucnion va dibujando el muñeco, con cada fallo de palabra

function dibujarAhorcado(){

    if(letrasFalladas == 1) {

        dibujaLinea(125,125,150,30);

    }else if(letrasFalladas == 2) {

        dibujaLinea(125,200,30,30);

    }else if (letrasFalladas == 3) {

        dibujaLinea(200,200,30,50);

    }else if(letrasFalladas == 4) {

        dibujarCirculo(200,60,10);

    }else if (letrasFalladas == 5) {

        dibujaLinea(200,200,70,100);

    }else if (letrasFalladas == 6) {

        dibujaLinea(200,180,100,120);

    }else if (letrasFalladas == 7) {

        dibujaLinea(200,220,100,120);

    }else if (letrasFalladas == 8) {

        dibujaLinea(200,190,85,100);

    }else if (letrasFalladas == 9) {

        dibujaLinea(200,210,85,100);

    }

}

