document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const checkIn = document.getElementById('checkin').value; // Get the date of entry
  const checkOut = document.getElementById('checkout').value; // Get the departure date
  const adults = document.getElementById('adults').value; // Get the number of adults
  const children = document.getElementById('children').value; // Get the number of children
  const roomType = document.querySelector('input[name="room_type"]:checked').value; // Get room type

  // Get the logged in user
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('Debe iniciar sesión para realizar una reserva');
    window.location.href = 'login.html'; // Redirect to login if not logged in
    return;
  }

  // Create a new reservation
  const newReservation = {
    userId: user.id, 
    checkIn: checkIn,
    checkOut: checkOut,
    adults: adults,
    children: children,
    roomType: roomType
  };

  // Send POST request to JSON Server
  fetch('http://localhost:3000/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newReservation) 
  })
  .then(response => response.json()) 
  .then(data => {
    // Show confirmation popup
    document.getElementById('confirmation-popup').style.display = 'flex';
  })
  .catch(error => {
    console.error('Error en la reserva:', error); // Error handling
    alert('Hubo un problema con la reserva.');
  });
});

// Handling the "OK" button in the popup
document.getElementById('accept-button').addEventListener('click', function() {
  document.getElementById('confirmation-popup').style.display = 'none'; 
  window.location.href = 'inicio.html'; 
});
