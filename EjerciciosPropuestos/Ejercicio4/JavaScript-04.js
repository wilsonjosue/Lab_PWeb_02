

function extraerCodigo(url) {
    // Buscar el patrón del código de sesión después de la última /
    var patron = /\/([a-z0-9-]+)$/i;
    var coincidencia = url.match(patron);
    if (coincidencia && coincidencia.length > 1) {
        // Obtener la parte coincidente sin el último guion
        var codigo = coincidencia[1].replace(/-/g, '');
        return codigo;
    } else {
        return 'No se pudo encontrar el código de la sesión en el URL proporcionado.';
    }
}

function obtenerCodigo() {
    var url = document.getElementById('meetUrl').value;
    var codigo = extraerCodigo(url);
    document.getElementById('resultado').innerText = 'El código de la sesión es: ' + codigo;
}
   