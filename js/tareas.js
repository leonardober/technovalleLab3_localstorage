
/*
Este archivo maneja una lista de tareas almacenadas en LocalStorage.


Recupera las tareas almacenadas (getItem("tareas")).
Usa JSON.parse() para convertir el texto en un array.
Si no hay tareas, devuelve un array vacío ([]).
*/
function obtenerTareas() {
    return JSON.parse(localStorage.getItem("tareas")) || [];
}
/*
Convierte el array de tareas a texto con JSON.stringify().
Lo guarda en LocalStorage bajo la clave "tareas".*/
function guardarTareas(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}
/*
Obtiene el texto ingresado y elimina espacios (trim()).
Si el campo está vacío, muestra una alerta y termina la función.

*/
function agregarTarea() {
    const nuevaTareaTexto = document.getElementById("tarea").value.trim();
    if (nuevaTareaTexto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }
/*
Recupera las tareas existentes (obtenerTareas()).
Crea una nueva tarea con un ID único (Date.now()).*/
    let tareas = obtenerTareas();
    const nuevaTarea = { id: Date.now(), texto: nuevaTareaTexto };
    tareas.push(nuevaTarea);
/*
Agrega la nueva tarea al array y lo guarda (guardarTareas()).
Limpia el campo y actualiza la lista (mostrarTareas()).*/
    guardarTareas(tareas);
    document.getElementById("tarea").value = "";
    mostrarTareas();
}

function actualizarTarea(id) {
    let tareas = obtenerTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id);
 /*Busca la tarea en el array usando findIndex().*/
    if (tareaIndex === -1) {
        alert("No se encontró la tarea.");
        return;
    }
 /*
 Si no la encuentra, muestra una alerta y termina la función.
Usa prompt() para pedir el nuevo texto.*/
    const nuevoTexto = prompt("Modifica tu tarea:", tareas[tareaIndex].texto);

    /*
    Si el usuario ingresa algo válido, actualiza la tarea y la guarda.
    Refresca la lista (mostrarTareas()).*/
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        tareas[tareaIndex].texto = nuevoTexto.trim();
        guardarTareas(tareas);
        mostrarTareas();
    }
}
/*
Filtra el array para excluir la tarea con el ID dado.
Guarda la nueva lista en LocalStorage.
Refresca la lista de tareas (mostrarTareas()).
*/

function eliminarTarea(id) {
    let tareas = obtenerTareas();
    tareas = tareas.filter(tarea => tarea.id !== id);

    guardarTareas(tareas);
    mostrarTareas();
}
/*
Limpia la lista de tareas (innerHTML = "").
Obtiene todas las tareas almacenadas.
Crea un <li> para cada tarea con botones para editar y eliminar.
Inserta cada tarea en la lista.
🎯 Resumen
✅ script.js (Manejo del formulario)

Guarda, lee y borra datos en LocalStorage.
Función irInicio() para regresar al inicio.
✅ tareas.js (Gestión de tareas)

Guarda y recupera tareas de LocalStorage.
Funciones para agregar, actualizar y eliminar tareas.
mostrarTareas() renderiza la lista de tareas en la página.
💡 ¿Dudas o mejoras? ¡Estoy aquí para ayudar! 🚀


*/
function mostrarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";

    let tareas = obtenerTareas();

    tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.innerHTML = `${tarea.texto} 
            <button onclick="actualizarTarea(${tarea.id})">✏️</button>
            <button onclick="eliminarTarea(${tarea.id})">🗑️</button>`;
        lista.appendChild(li);
    });
}

/*
script.js (Manejo del formulario)

Guarda, lee y borra datos en LocalStorage.
Función irInicio() para regresar al inicio.
✅ tareas.js (Gestión de tareas)

Guarda y recupera tareas de LocalStorage.
Funciones para agregar, actualizar y eliminar tareas.
mostrarTareas() renderiza la lista de tareas en la página
*/