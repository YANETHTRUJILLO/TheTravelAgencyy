document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío predeterminado del formulario

  const name = document.getElementById('name').value; // Obtener el nombre ingresado
  const email = document.getElementById('email').value; // Obtener el email ingresado
  const password = document.getElementById('password').value; // Obtener la contraseña ingresada

  // Crear un nuevo usuario
  const newUser = {
    name: name,
    email: email,
    password: password // Recuerda que en producción deberías hashear esta contraseña
  };

  // Enviar la solicitud POST a JSON Server
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser) // Convertir el objeto a JSON
  })
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    alert('Registro exitoso!'); // Alerta de éxito
    window.location.href = 'login.html'; // Redirigir al login
  })
  .catch(error => {
    console.error('Error en el registro:', error); // Manejo de errores
    alert('Hubo un problema con el registro.');
  });
});
