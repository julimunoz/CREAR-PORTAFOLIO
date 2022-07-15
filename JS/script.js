var formulario = document.querySelector("#formulario_contacto");
var boton = document.querySelector("#form_boton");

var mensajeErrorNombre = "";
var mensajeErrorMail = "";
var mensajeErrorAsunto = "";
var mensajeErrorMensaje = "";
var habilitado = false;
var valorBoton = 0;

formulario.addEventListener("keyup",validarformulario);


function validarformulario() {

    if((formulario.form_name.value =="") || (formulario.form_name.value.length > 50)){

        var pruebaNombre = 1;
        mensajeErrorNombre = "el campo nombre no puede estar vacio y debe contener menos de 50 caracteres";
        formulario.form_name.title = mensajeErrorNombre;
        
    }else {

        pruebaNombre = 0;
        mensajeErrorNombre = "";
    }

    if(formulario.form_email.value.includes("@") && formulario.form_email.value.includes(".") && formulario.form_email.value != ""){

        var pruebaMail = 0;
        mensajeErrorMail = "";
    }else {

        pruebaMail = 1;
        mensajeErrorMail = "el campo correo no puede estar vacio y debe contener los caracteres @ y .";
        formulario.form_email.title = mensajeErrorMail;
    }  

    if((formulario.form_asunto.value =="") || (formulario.form_asunto.value.length > 50)){

        var pruebaAsunto = 1;
        mensajeErrorAsunto = "el campo asunto no puede estar vacio y debe contener menos de 50 caracteres";
        formulario.form_asunto.title = mensajeErrorAsunto;
    }else {

        pruebaAsunto = 0;
        mensajeErrorAsunto = "";
    }

    if((formulario.form_mensaje.value =="") || (formulario.form_mensaje.value.length > 300)){

        var pruebaMensaje = 1;
        mensajeErrorMensaje = "el campo nombre no puede estar vacio y debe contener menos de 300 caracteres";
        formulario.form_mensaje.title = mensajeErrorMensaje;
        
    }else {

        pruebaMensaje = 0;
        mensajeErrorMensaje = "";
    }

    valorBoton = pruebaNombre + pruebaMail + pruebaAsunto + pruebaMensaje;
    mensaje = mensajeErrorNombre +" "+ mensajeErrorMail +" "+ mensajeErrorAsunto +" "+ mensajeErrorMensaje;

    if(valorBoton == 0){

       habilitado = true;

    }else {
       habilitado = false
    }

    if(habilitado == true){
        boton.disabled = false;
    }else {
        boton.disabled = true;
    }

}




