function convertirDesdeDolar() {
    let dolar = document.getElementById('dolarInput').value;
    document.getElementById('pesoInput').value = (dolar * 20).toFixed(2); // Suponiendo que 1 USD = 20 MXN
}

function convertirDesdePeso() {
    let peso = document.getElementById('pesoInput').value;
    document.getElementById('dolarInput').value = (peso / 20).toFixed(2); // Suponiendo que 1 USD = 20 MXN
}

function convertirDesdeCelsius() {
    let celsius = document.getElementById('celsiusInput').value;
    document.getElementById('fahrenheitInput').value = (celsius * 9/5 + 32).toFixed(2);
}

function convertirDesdeFahrenheit() {
    let fahrenheit = document.getElementById('fahrenheitInput').value;
    document.getElementById('celsiusInput').value = ((fahrenheit - 32) * 5/9).toFixed(2);
}
