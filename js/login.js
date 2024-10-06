document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Request to JSON Server
  fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        alert('Login exitoso!');

        // Save user id and name in localStorage
        localStorage.setItem('user', JSON.stringify({ id: data[0].id, name: data[0].name }));

        window.location.href = 'inicio.html'; // Redirect to home page
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    })
    .catch(error => {
      console.error('Error en el login:', error);
      alert('Hubo un problema con la solicitud.');
    });
});
