document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const userRole = document.getElementById('userRole').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Example authentication simulation
    if (userRole === 'admin' && username === 'admin' && password === 'admin123') {
      window.location.href = 'admin_dashboard.html'; // Redirect to Admin Dashboard
    } else if (userRole === 'employee' && username === 'employee' && password === 'employee123') {
      window.location.href = 'employee_dashboard.html'; // Redirect to Employee Dashboard
    } else {
      errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
  });
  