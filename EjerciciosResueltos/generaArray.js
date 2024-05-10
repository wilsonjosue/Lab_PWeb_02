function arrayGenerator(n, min, max) {
    if (min >= max) {
        throw new Error("min debe ser menor que max");
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        result.push(randomNumber);
    }
    return result;
}

function generarArray() {
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


