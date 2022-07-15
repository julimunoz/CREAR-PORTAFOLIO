
/* esta archivo permite almacenar el array en el localstore y de esa forma
 trabajar con el para grarle palabras nuevas */

palabras = JSON.parse(localStorage.getItem('myArray')); // trae el arreglo

if(palabras==null){ // si no existe lo crea
    // El arreglo:
    var palabras = ["FOOTBALL","CIRUJANO","CALABERA","LAPICERO","AJEDRES","FIESTA","TIJERAS","BOXEADOR","CUADRO"];
    localStorage.setItem('myArray', JSON.stringify(palabras)); // asi lo guarda
}