document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const checkIn = document.getElementById('checkin').value; // Obtener la fecha de ingreso
  const checkOut = document.getElementById('checkout').value; // Obtener la fecha de salida
  const adults = document.getElementById('adults').value; // Obtener el número de adultos
  const children = document.getElementById('children').value; // Obtener el número de niños
  const roomType = document.querySelector('input[name="room_type"]:checked').value; // Obtener el tipo de habitación

  // Obtener el usuario logueado
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('Debe iniciar sesión para realizar una reserva');
    window.location.href = 'login.html'; // Redirigir al login si no está logueado
    return;
  }

  // Crear una nueva reserva
  const newReservation = {
    userId: user.id, // ID del usuario logueado
    checkIn: checkIn,
    checkOut: checkOut,
    adults: adults,
    children: children,
    roomType: roomType
  };

  // Enviar la solicitud POST a JSON Server
  fetch('http://localhost:3000/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newReservation) // Convertir el objeto a JSON
  })
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    // Mostrar el popup de confirmación
    document.getElementById('confirmation-popup').style.display = 'flex';
  })
  .catch(error => {
    console.error('Error en la reserva:', error); // Manejo de errores
    alert('Hubo un problema con la reserva.');
  });
});

// Manejar el botón "Aceptar" en el popup
document.getElementById('accept-button').addEventListener('click', function() {
  document.getElementById('confirmation-popup').style.display = 'none'; // Ocultar el popup
  window.location.href = 'inicio.html'; // Redirigir al inicio
});
