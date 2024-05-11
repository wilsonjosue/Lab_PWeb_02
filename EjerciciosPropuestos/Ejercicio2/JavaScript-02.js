
function invertirTexto() {
    // Obtener el texto ingresado por el usuario
    const texto = document.getElementById("texto").value;
    //Iterar sobre el texto desde el último carácter hasta el primero
    let textoInvertido = "";
    for(let i=texto.length -1;i>=0; i--){
        textoInvertido= textoInvertido+texto[i];
    }
    // Mostrar el texto invertido en el div de resultado
    document.getElementById("resultado").innerText = textoInvertido;
}