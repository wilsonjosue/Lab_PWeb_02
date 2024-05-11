function obtenerDiaSemana(numeroDia) {
    // Obtener la fecha actual
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return diasSemana[numeroDia];
}

// Obtener la fecha actual
const fechaActual = new Date();
// Obtener el número de día de la semana (0 para Domingo, 1 para Lunes, etc.)
let numeroDia = fechaActual.getDay();
// Obtener el nombre del día de la semana
let nombreDia = obtenerDiaSemana(numeroDia);

document.getElementById("resultado").innerText = "Hoy es " + nombreDia;