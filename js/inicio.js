document.addEventListener('DOMContentLoaded', function() {
  const user = JSON.parse(localStorage.getItem('user')); // Get the localStorage user

  if (user) {
    // Show name with icon
    document.getElementById('user-name').innerHTML = `<i class="fas fa-user-circle"></i> ${user.name}`;
  } else {
    // If there is no user logged in, redirect to login
    window.location.href = 'login.html'; 
  }
});
