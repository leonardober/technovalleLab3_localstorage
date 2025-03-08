/*
el Js Este archivo gestiona el almacenamiento de los datos del formulario 
en LocalStorage, permitiendo guardarlos, leerlos y eliminarlos.

Recupera los valores almacenados usando getItem(clave).
Si no hay datos, asigna una cadena vacía ("") para evitar errores.*/ 
document.addEventListener("DOMContentLoaded", () => {
    leerInfo();
    mostrarTareas();
    /*
    DOMContentLoaded

Se ejecuta cuando la página ha cargado completamente.
Llama a leerInfo() para rellenar el formulario si hay datos guardados.
Llama a mostrarTareas() para listar las tareas almacenadas.
*/
});
/*Hace que la página vuelva al inicio con un efecto suave (smooth).
*/
function irInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
/*
Obtiene los valores de los campos del formulario.
Guarda cada valor en LocalStorage con setItem(clave, valor).
Muestra una alerta para confirmar que los datos se guardaron.*/

function guardarInfo() {
    const infoUsr = document.getElementById("usuario").value;
    const infoEmail = document.getElementById("email").value;
    const infoPassw = document.getElementById("passwd").value;

    localStorage.setItem("usuario", infoUsr);
    localStorage.setItem("email", infoEmail);
    localStorage.setItem("passwd", infoPassw);
    alert("Datos guardados en LocalStorage");
}

function leerInfo() {
    document.getElementById("usuario").value = localStorage.getItem("usuario") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("passwd").value = localStorage.getItem("passwd") || "";
}
/*
Borra cada dato con removeItem(clave).
Limpia los campos del formulario.
Muestra una alerta para confirmar la eliminación.*/
function borrarInfo() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("email");
    localStorage.removeItem("passwd");
    document.getElementById("usuario").value = "";
    document.getElementById("email").value = "";
    document.getElementById("passwd").value = "";
    alert("Datos eliminados de LocalStorage");
}
/*
✅ script.js (Manejo del formulario)

Guarda, lee y borra datos en LocalStorage.
Función irInicio() para regresar al inicio.
✅ tareas.js (Gestión de tareas)

Guarda y recupera tareas de LocalStorage.
Funciones para agregar, actualizar y eliminar tareas.
mostrarTareas() renderiza la lista de tareas en la página. */