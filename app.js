// Seleccionar elementos
const boton = document.getElementById("generarBtn");
const contenedor = document.getElementById("contenedor");

// Función para generar color HEX
function generarColorHex() {
    const letras = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16);
        color += letras[random];
    }

    return color;
}

// Evento click
boton.addEventListener("click", () => {
    console.log("Click detectado");

    // Limpiar contenedor
    contenedor.innerHTML = "";

    // Generar 3 colores (fase 1)
    for (let i = 0; i < 3; i++) {

        const color = generarColorHex();
        console.log(color);

        // Crear elemento
        const caja = document.createElement("div");
        caja.classList.add("color");

        // Aplicar color
        caja.style.backgroundColor = color;

        // Mostrar texto
        caja.textContent = color;

        // Agregar al DOM
        contenedor.appendChild(caja);
    }
});