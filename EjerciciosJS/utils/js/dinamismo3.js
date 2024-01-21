let display = document.getElementById('display');
let historial = document.getElementById('historial');

function ingresar(valor) {
    display.value += valor;
}

function calcular() {
    try {
        let resultado = eval(display.value);
        historial.innerHTML += `${display.value} = ${resultado}<br>`;
        display.value = resultado;
    } catch (e) {
        display.value = 'Error';
        setTimeout(() => { borrar(); }, 2000);
    }
}

function borrar() {
    display.value = '';
}

// Si es necesario, puedes agregar más funcionalidades aquí
