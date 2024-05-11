/**
 * Escriba la función arrayGenerator que reciba tres enteros positivos: n, min y max,
   con min < max y devuelva un arreglo de n números enteros positivos entre los valores
   dados (incluyendo min, pero no max).
 * Usa Math.random(), 
   ¿Cómo se puede resolver este warning?
   ¿Puede modificar la solución usando map?
*/

function arrayGenerator(n, min, max) {
        if (min >= max) {
            throw new Error("min debe ser menor que max");
        }
    
        return Array.from({ length: n }, () => Math.ceil(Math.random() * (max - min) + min));
    }
    
function generar2() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const minimo = parseInt(document.getElementById('minimo').value);
    const maximo = parseInt(document.getElementById('maximo').value);

    try {
        const arreglo = arrayGenerator(cantidad, minimo, maximo);
        const resultadosDiv = document.getElementById('resultados2');
        resultadosDiv.innerHTML = `<p>Resultados: ${arreglo.join(', ')}</p>`;
    } catch (error) {
        alert(error.message);
    }
}
