// Fecha del Día de Arequipa es el 15 de agosto
var diaDeArequipa = new Date('2024-08-15');

// Función para calcular los días restantes
function calcularDiasRestantes() {
    let hoy= new Date();
    let diferenciaDias=diaDeArequipa -hoy;
    //la diferencia seda en milisegundos 
    let dias = Math.ceil(diferenciaDias/(1000*60*60*24));
    return dias;
}

// Función para actualizar el contador cada segundo
function actualizarContador() {
    var diasRestantes = calcularDiasRestantes();
    document.getElementById('resultado').innerHTML = "Faltan " + diasRestantes + " dias para el Dia de Arequipa.";
}

// Llamar a la función inicialmente 
actualizarContador();


