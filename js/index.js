function validarFormulario() {
    console.log("estoy aqui");
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;
    var personas = document.getElementById("personas").value;

    if (nombre === "" || apellido === "" || numero === "" || email === "" || personas === "") {
        alert("Por favor, complete todos los campos y seleccione la cantidad de personas.");
        return;
    }

    else {
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
    }

    // Si todas las validaciones pasan, se envia el formulario. 
    alert("Formulario enviado correctamente.");

    //Una vez el formulario es enviado, se redirige a la sección End de la página, informando que la reserva es exitosa.

    var endPage = document.getElementById("end");
    endPage.style.display = "block";
    window.location.href = "#end";

}


