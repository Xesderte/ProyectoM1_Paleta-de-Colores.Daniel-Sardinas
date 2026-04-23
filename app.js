//Variables globales
let cantidadMax = null;
let mitad = null;

// Seleccionar elementos
const boton = document.getElementById("generarBtn");
const contenedor = document.getElementById("contenedor");
const cantidadColores = document.getElementById("cantidad");
const botonesCantidad = document.querySelectorAll(".cantidad");
const mensaje = document.getElementById("mensaje");

// Función para generar color HSL aleatorio
function generarColorHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = 70;
    const l = 60;

    colorHsl =`hsl(${h}, ${s}%, ${l}%)`;

    return {colorHsl, h, s, l };
}

// Función para generar color hexadecimal aleatorio
function generarColorHex() {
    const letras = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * 16);
        color += letras[random];
    }

    return color;
}

//Funcion para convertir HSL a Hexadecimal
function hslToHex(h, s, l) {
    // Convertir a RGB primero
    s /= 100;
    l /= 100;

    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);

    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    const r = Math.round(255 * f(0));
    const g = Math.round(255 * f(8));
    const b = Math.round(255 * f(4));

    // Convertir a HEX
    const toHex = x => x.toString(16).padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Evento click Generar colores
boton.addEventListener("click", () => {
    
    if (cantidadMax === null) {
        mensaje.style.display = "inline-block";
        mensaje.textContent = "⚠️ Seleccionar la cantidad a generar ⚠️";
        console.log("Click detectado");
    return;
    }else{
        // Limpiar contenedor
        mensaje.style.display = "none";
        contenedor.innerHTML = "";

        // Generar Colores HSL y Hexadecimal
        for (let i = 0; i < mitad; i++) {

            const {colorHsl, h, s, l} = generarColorHSL();
            console.log(colorHsl);

            // Crear elemento
            const caja = document.createElement("div");
            caja.classList.add("color");

            // Aplicar color
            caja.style.backgroundColor = colorHsl;

            //Pasar de HSL a Hexadecimal
            const colorHex = hslToHex(h, s, l);
            // Mostrar texto
            caja.textContent = colorHex;

            // Agregar al DOM
            contenedor.appendChild(caja);
        }

        for(let i = mitad; i < cantidadMax; i++){
            const colorHex = generarColorHex();
            console.log(colorHex);

            // Crear elemento
            const caja = document.createElement("div");
            caja.classList.add("color");

            // Aplicar color
            caja.style.backgroundColor = colorHex;

            // Mostrar texto
            caja.textContent = colorHex;

            // Agregar al DOM
            contenedor.appendChild(caja);
        }
    }
});

// Evento click para botones de cantidad
botonesCantidad.forEach((btn) => {
    btn.addEventListener("click", () => {

        cantidadMax = parseInt(btn.dataset.cantidad);
        mitad = Math.floor(cantidadMax / 2) + (cantidadMax % 2); // Si es impar, agregar uno más a la mitad

        console.log("Cantidad seleccionada:", cantidadMax);
        console.log("Mitad de la cantidad:", mitad);

        // 1. Sacar activo de todos
        botonesCantidad.forEach(b => b.classList.remove("activo"));

        // 2. Agregar activo al clickeado
        btn.classList.add("activo");

        console.log("Botón clickeado:", btn);

        mensaje.style.display = "none";
    });
});