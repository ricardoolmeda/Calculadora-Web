function limpiarPantalla(){
    document.getElementById("pantalla").value = "";
}

function valorCampo(valor){
    document.getElementById("pantalla").value += valor;
}

function calcular(){
    const resultadoPantalla = document.getElementById("pantalla");
    try {
        resultadoPantalla.value = eval(resultadoPantalla.value)
    } catch {
        resultadoPantalla.value = "Error en los valores"
    }
}