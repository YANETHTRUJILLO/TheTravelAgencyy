document.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('user')); // Obtener el usuario del localStorage

  if (user) {
    // Si hay un usuario logueado, mostrar su nombre en el elemento correspondiente con el icono
    document.getElementById('user-name').innerHTML = `<i class="fas fa-user-circle"></i> ${user.name}`;
  } else {
    // Si no hay usuario logueado, redirigir al login
    window.location.href = 'login.html'; // Opcional: redirigir al login
  }
});
