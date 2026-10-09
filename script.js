javascript
// Esperar a que el HTML termine de cargar
document.addEventListener("DOMContentLoaded", function () {

    // Botón de bienvenida en index.html
    const botonBienvenida = document.getElementById("botonBienvenida");

    if (boton) {
        boton.addEventListener("click", function () {
            alert("¡Bienvenido a mi página de mis cantantes favoritos!");
        });
    }
}

    // Formulario de contacto en contacto.html
    const formulario = document.querySelector("#formularioContacto");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            alert("¡Gracias por tu mensaje! El formulario se ha completado.");

            formulario.reset();
        });
    }

});