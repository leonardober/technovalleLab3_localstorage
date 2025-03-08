document.addEventListener("DOMContentLoaded", () => {
    leerInfo();
    mostrarTareas();
});

function irInicio() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

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

function borrarInfo() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("email");
    localStorage.removeItem("passwd");
    document.getElementById("usuario").value = "";
    document.getElementById("email").value = "";
    document.getElementById("passwd").value = "";
    alert("Datos eliminados de LocalStorage");
}
