          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Truth Palestine</title>
              <link rel="stylesheet" href="styles.css">
          </head>
          <body>
              <div class="login-container" id="login-container">
                  <img src="your-logo-image-url" alt="Truth Palestine Logo" class="logo">
                  <h2>Truth Palestine</h2>

                  <!-- Login Form -->
                  <form id="login-form">
                      <label for="username">Username</label>
                      <input type="text" id="username" name="username" required>

                      <label for="password">Password</label>
                      <input type="password" id="password" name="password" required>

                      <button type="button" onclick="login()">Login</button>
                  </form>

                  <!-- Registration Form -->
                  <form id="registration-form" style="display: none;">
                      <label for="new-username">New Username</label>
                      <input type="text" id="new-username" name="new-username" required>

                      <label for="new-password">New Password</label>
                      <input type="password" id="new-password" name="new-password" required>

                      <button type="button" onclick="register()">Register</button>
                  </form>

                  <!-- Toggle between Login and Registration forms -->
                  <p id="toggle-form-text">Don't have an account? <a href="#" id="toggle-form-link" onclick="toggleForms()">Register here</a></p>
              </div>

              <!-- ... rest of your HTML ... -->

              <script src="script.js"></script>
              <script>
                  document.addEventListener('DOMContentLoaded', function() {
                      const loginForm = document.getElementById('login-form');
                      const registrationForm = document.getElementById('registration-form');
                      const toggleFormLink = document.getElementById('toggle-form-link');
                      const toggleFormText = document.getElementById('toggle-form-text');

                      // Toggle between Login and Registration forms
                      toggleFormLink.addEventListener('click', function(event) {
                          event.preventDefault();
                          if (loginForm.style.display === 'block') {
                              loginForm.style.display = 'none';
                              registrationForm.style.display = 'block';
                              toggleFormText.innerHTML = 'Already have an account? <a href="#" id="toggle-form-link" onclick="toggleForms()">Login here</a>';
                          } else {
                              loginForm.style.display = 'block';
                              registrationForm.style.display = 'none';
                              toggleFormText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-form-link" onclick="toggleForms()">Register here</a>';
                          }
                      });

                      // Your other JavaScript code goes here
                  });

                  function toggleForms() {
                      const loginForm = document.getElementById('login-form');
                      const registrationForm = document.getElementById('registration-form');

                      if (loginForm.style.display === 'none') {
                          loginForm.style.display = 'block';
                          registrationForm.style.display = 'none';
                      } else {
                          loginForm.style.display = 'none';
                          registrationForm.style.display = 'block';
                      }
                  }

                  function login() {
                      // Add your login logic here
                      alert('Login functionality to be implemented.');
                  }

                  function register() {
                      // Add your registration logic here
                      alert('Registration functionality to be implemented.');
                  }
              </script>
          </body>
          </html>
