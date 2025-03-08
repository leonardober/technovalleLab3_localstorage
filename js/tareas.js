function obtenerTareas() {
    return JSON.parse(localStorage.getItem("tareas")) || [];
}

function guardarTareas(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function agregarTarea() {
    const nuevaTareaTexto = document.getElementById("tarea").value.trim();
    if (nuevaTareaTexto === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    let tareas = obtenerTareas();
    const nuevaTarea = { id: Date.now(), texto: nuevaTareaTexto };
    tareas.push(nuevaTarea);

    guardarTareas(tareas);
    document.getElementById("tarea").value = "";
    mostrarTareas();
}

function actualizarTarea(id) {
    let tareas = obtenerTareas();
    const tareaIndex = tareas.findIndex(tarea => tarea.id === id);

    if (tareaIndex === -1) {
        alert("No se encontró la tarea.");
        return;
    }

    const nuevoTexto = prompt("Modifica tu tarea:", tareas[tareaIndex].texto);

    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        tareas[tareaIndex].texto = nuevoTexto.trim();
        guardarTareas(tareas);
        mostrarTareas();
    }
}

function eliminarTarea(id) {
    let tareas = obtenerTareas();
    tareas = tareas.filter(tarea => tarea.id !== id);

    guardarTareas(tareas);
    mostrarTareas();
}

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
