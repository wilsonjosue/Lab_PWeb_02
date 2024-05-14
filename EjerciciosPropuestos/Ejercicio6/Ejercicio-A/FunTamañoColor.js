// Función para cambiar tamaño del texto
function cambiarTamaño(accion) {
    var texto = document.getElementById('text');
    var tamañoActual = window.getComputedStyle(texto, null).getPropertyValue('font-size');
    tamañoActual = parseFloat(tamañoActual);
    if (accion === 'aumentar') {
        texto.style.fontSize = (tamañoActual + 2) + 'px';
    } else if (accion === 'disminuir') {
        texto.style.fontSize = (tamañoActual - 2) + 'px';
    }
}

// Función para cambiar color del texto
function cambiarColor(color) {
    var texto = document.getElementById('textoColor');
    texto.style.color = color;
}