var mensajeADesencriptar
            var mensajeDesencriptado;
            var mensajeAEncriptar;
            var mensajeEncriptado;
           

        function encriptar() {
            
            mensajeAEncriptar = document.getElementById("mensajeAEncriptar").value.toLowerCase(); // de esta forma capturo el valor del input con con su Id, con el tolowercase paso todo a minusculas
            mensajeEncriptado = mensajeAEncriptar.replace(/e/igm,"enter"); /* el primer parametro del replace se coloca entre backslash para que evalue todas letras y bo solo la primera que encuentre, el segundo parametro son 3 letras, que se pueden usar o no y significan:
            i: para que afecte tanto minusculas como mayusculas
            g: es para que evalue toda la linea u oracion
            m: para que afecte multiples lineas o parrafo
            el ultimo parametro es por que lo voy a reemplazar*/
            mensajeEncriptado = mensajeEncriptado.replace(/i/igm,"imes");
            mensajeEncriptado = mensajeEncriptado.replace(/a/igm,"ai");
            mensajeEncriptado = mensajeEncriptado.replace(/o/igm,"ober");
            mensajeEncriptado = mensajeEncriptado.replace(/u/igm,"ufat");
            document.getElementById("mensajeEncriptado").value = mensajeEncriptado; // asi asigno a el input el valor de la variable
            //document.getElementById("mensajeEncriptado").innerHTML = mensajeEncriptado;
            document.getElementById("mensajeAEncriptar").value ="";
            document.getElementById("muneco").style.display = "none";
            document.getElementById("textonmfe").style.display = "none";
            document.getElementById("botonCopiar").style.display = "show";
            document.getElementById("botonCopiar").style.display = "inherit"; // esro se usa para que tome el valor definido en el padre


        }


        function desencriptar() {
            
            mensajeADesencriptar = document.getElementById("mensajeAEncriptar").value;
            mensajeDesencriptado = mensajeADesencriptar.replace(/enter/igm,"e");
            mensajeDesencriptado = mensajeDesencriptado.replace(/imes/igm,"i");
            mensajeDesencriptado = mensajeDesencriptado.replace(/ai/igm,"a");
            mensajeDesencriptado = mensajeDesencriptado.replace(/ober/igm,"o");
            mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/igm,"u");
            document.getElementById("mensajeEncriptado").value = mensajeDesencriptado;
            //document.getElementById("mensajeEncriptado").innerHTML = mensajeEncriptado;
            document.getElementById("mensajeAEncriptar").value ="";
            document.getElementById("muneco").style.display = "none";
            document.getElementById("textonmfe").style.display = "none";
            document.getElementById("botonCopiar").style.display = "show";
            document.getElementById("botonCopiar").style.display = "inherit"; // esro se usa para que tome el valor definido en el padre
             

        }

        function copiarAPortaPapeles(){

            var textoACopiar = document.getElementById("mensajeEncriptado");
                textoACopiar.select();
                //textoACopiar.setSelectionRange(0,99999);
                document.execCommand('copy');

        }

        /*var botonEncriptar = document.getElementById("botonEncriptar");
            botonEncriptar.onclick = encriptar;

        var botonDesencriptar = document.getElementById("botonDesencriptar");
            botonDesencriptar.onclick = desencriptar;

        var botonCopiar = document.getElementById("botonCopiar");
            botonCopiar.onclick = copiarAPortaPapeles;*/