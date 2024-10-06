document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value; 
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value; 

  // Create a new user
  const newUser = {
    name: name,
    email: email,
    password: password 
  };

  // Send POST request to JSON Server
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser) // Convert object to JSON
  })
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    alert('Registro exitoso!'); 
    window.location.href = 'login.html'; 
  })
  .catch(error => {
    console.error('Error en el registro:', error); // Error handling
    alert('Hubo un problema con el registro.');
  });
});
