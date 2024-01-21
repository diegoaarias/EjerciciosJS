const rInput = document.getElementById('r');
const gInput = document.getElementById('g');
const bInput = document.getElementById('b');
const colorDisplay = document.getElementById('colorDisplay');
const datePicker = document.getElementById('datePicker');

function updateColor() {
    const r = rInput.value;
    const g = gInput.value;
    const b = bInput.value;
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor = rgb;
    colorDisplay.textContent = `RGB : ${r} / ${g} / ${b}`;
}

[rInput, gInput, bInput].forEach(input => input.addEventListener('input', updateColor));

function changeBackgroundColorBySeason() {
    const date = new Date(datePicker.value);
    const month = date.getMonth() + 1;

    let backgroundColor;
    if (month >= 3 && month <= 5) {
        backgroundColor = 'lightgreen'; // Primavera
    } else if (month >= 6 && month <= 8) {
        backgroundColor = 'lightyellow'; // Verano
    } else if (month >= 9 && month <= 11) {
        backgroundColor = 'orange'; // Otoño
    } else {
        backgroundColor = 'lightblue'; // Invierno
    }

    document.body.style.backgroundColor = backgroundColor;
}

datePicker.addEventListener('change', changeBackgroundColorBySeason);
