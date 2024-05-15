function generarTabla() {
    let numValues = parseInt(document.getElementById('numValues').value);
    let table = document.getElementById('valueTable');
    table.innerHTML = ''; // Limpiar la tabla anterior, si existe

    let header = table.createTHead();
    let row = header.insertRow();
    let th = document.createElement('th');
    th.textContent = 'Valores';
    row.appendChild(th);

    let tbody = document.createElement('tbody');

    for (var i = 0; i < numValues; i++) {
        var value = Math.floor(Math.random() * 100) + 1; // Generar un número aleatorio entre 1 y 100
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
        tbody.appendChild(tr);
        }

        table.appendChild(tbody);
        document.getElementById('tableContainer').style.display = 'block';
    }

//Se puede acceder para configurara y crear una tabla.
document.getElementById('configForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generarTabla();
});

function calcularSuma() {
    let table = document.getElementById('valueTable');
    let rows = table.getElementsByTagName('tr');
    let suma = 0;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td'); // Obtener todas las celdas de la fila
        if (cells.length > 0) { // Verificar si hay celdas en la fila
            suma += parseInt(cells[0].textContent); // Sumar el contenido de la primera celda
        }
    }

    document.getElementById('resultado').textContent = 'La suma de todos los valores es: ' + suma;
    document.getElementById('resultado').style.display = 'block';
}
