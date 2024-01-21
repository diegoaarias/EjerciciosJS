document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const dni = document.getElementById('dni').value;

    if (nombre && apellido && telefono && dni) {
        const resultados = document.getElementById('resultados');
        resultados.textContent = `Nombre - ${nombre} - Apellido - ${apellido} - DNI - ${dni} - Teléfono - ${telefono}`;

        const lista = document.getElementById('listaUsuarios');
        lista.innerHTML += `<li>${nombre} ${apellido} - ${dni} - ${telefono}</li>`;

        // Limpiar formulario
        document.getElementById('dataForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
