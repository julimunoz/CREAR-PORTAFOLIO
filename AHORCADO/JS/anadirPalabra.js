// esta funcion permite añadir una nueva palabra al array

// uso esta insriccion para traer el array del localstore

palabras = JSON.parse(localStorage.getItem('myArray'));

var contador = 0;
var letraEvaluada;
var repetidad;


// esta funcion verifica que la plabra solo enga letras y que no se encuentre ya en el array.
function anadirPalabra(){


    palabraNueva = document.getElementById("ingrese-palabra").value.toUpperCase();
    //console.log(palabraNueva);  


// evaluo el codigo de cada letra de la palabra para verificar si es letra entre A y Z

    for(var i = 0; i < palabraNueva.length; i++){

        letraEvaluada = palabraNueva[i].charCodeAt(0);

        if(!(letraEvaluada > 64 && letraEvaluada < 91)){

            contador = contador + 1;
        
        }

        
    }

    //si no es letra incrementa una variable y al evaluar esa variable agrego o no la palabra
        
    if(contador == 0) {

        var evaluacion = palabraRepetidad(palabraNueva);
        //console.log(evaluacion);

        if (evaluacion==false) {
        palabras.push(palabraNueva);
        console.log(palabras);
        window.location.href='ahorcado.html'; //instruccion para cagar otra pagina
        document.getElementById("ingrese-palabra").value = ""; 
        }else{

            alert("palabra repetidad, pruebe nuevamente");
        }

    } else {
            
            alert("solo se permiten letras");
            contador = 0;

    }  

    }

    // evalua si la palbra ya existe en el array, devuelve true o false.
    function palabraRepetidad (palabraAVerificar){

        if(palabras.includes(palabraAVerificar)){

            repetidad = true;
        }else {

            repetidad = false;
        }

        return repetidad;


    }
    