document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos el enlace de "Buscar Hotel" usando su ID
  const buscarHotelLink = document.getElementById('buscar-hotel');

  // Añadimos un evento 'click' al enlace
  buscarHotelLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace

    // Mostramos el mensaje de alerta
    const userResponse = confirm("Aún no se encuentra logeado. ¿Desea ir al login?");

    // Si el usuario hace clic en "Aceptar", redirigimos al login
    if (userResponse) {
      window.location.href = 'login.html'; // Redirigimos al login
    }
  });
});

// boton Reservas 
document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Mostrar el popup
  document.getElementById('confirmation-popup').style.display = 'flex';
});

// Manejar el botón "Aceptar"
document.getElementById('accept-button').addEventListener('click', function() {
  document.getElementById('confirmation-popup').style.display = 'none'; // Ocultar el popup
});
