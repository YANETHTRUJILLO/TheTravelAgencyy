document.addEventListener('DOMContentLoaded', function() {
  
  const buscarHotelLink = document.getElementById('buscar-hotel');

  // We add a 'click' event to the link
  buscarHotelLink.addEventListener('click', function(event) {
    event.preventDefault(); 

    // We show the alert message
    const userResponse = confirm("Aún no se encuentra logeado. ¿Desea ir al login?");

    // If the user clicks "Accept", we redirect to the login
    if (userResponse) {
      window.location.href = 'login.html'; 
    }
  });
});

// Reservations button
document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Show popup
  document.getElementById('confirmation-popup').style.display = 'flex';
});

// Handling the "OK" button
document.getElementById('accept-button').addEventListener('click', function() {
  document.getElementById('confirmation-popup').style.display = 'none'; // Ocultar el popup
});
