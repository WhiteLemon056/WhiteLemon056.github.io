// Obtener referencia al formulario de contacto
const formularioContacto = document.getElementById('contacto-formulario');

// Agregar evento submit al formulario
formularioContacto.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevenir el envío del formulario

	// Obtener los valores de los campos del formulario
	const nombre = document.getElementById('nombre').value;
	const email = document.getElementById('email').value;
	const mensaje = document.getElementById('mensaje').value;

	// Validar que se hayan ingresado datos
	if (nombre && email && mensaje) {
		// Simular el envío del formulario
		alert('¡Gracias por contactarnos! Pronto te responderemos.');

		// Limpiar los campos del formulario
		document.getElementById('nombre').value = '';
		document.getElementById('email').value = '';
		document.getElementById('mensaje').value = '';
	} else {
		alert('Por favor, completa todos los campos del formulario.');
	}
});
