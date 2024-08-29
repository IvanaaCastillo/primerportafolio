document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && telefono && email && mensaje) {
            alert('¡Gracias! Pronto nos contacteremos contigo');

            form.submit();
        } else {
            alert('Por favor, completa todos los campos solicitados.');
            return;
        }
    });
});
