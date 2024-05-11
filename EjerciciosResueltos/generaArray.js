/**
 * Escriba la función arrayGenerator que reciba tres enteros positivos: n, min y max,
   con min < max y devuelva un arreglo de n números enteros positivos entre los valores
   dados (incluyendo min, pero no max).
 * Usa Math.random(), 
 */
function arrayGenerator(n, min, max) {
    // Verificar si min es mayor o igual que max
    if (min >= max) {
        throw new Error("min debe ser menor que max");
    }

    // Generar el array de números aleatorios
    let a = [];
    for (let i = 0; i < n; i++) {
        // Generar un número aleatorio dentro del rango y agregarlo al array
        a.push(Math.ceil(Math.random() * (max - min) + min));
    }
    return a;
}

function generar() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);

    try {
        const arreglo = arrayGenerator(cantidad, minimo, maximo);
        const resultadosDiv = document.getElementById('resultados');
        resultadosDiv.innerHTML = `<p>Resultados: ${arreglo.join(', ')}</p>`;
    } catch (error) {
        alert(error.message);
    }
}


