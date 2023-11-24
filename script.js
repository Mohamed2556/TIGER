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
        <img src="https://static.vecteezy.com/system/resources/previews/018/758/346/non_2x/illustration-of-save-palestine-palestine-map with wire-perfect for print banner poster campaign etc-free-vector.jpg" alt="Truth Palestine Logo" class="logo">
        <h2>Truth Palestine</h2>

        <!-- Login Form -->
        <form id="login-form">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>
            
            <button type="button" onclick="showVideo()">Login</button>
        </form>

        <!-- Registration Form -->
        <form id="registration-form" style="display: none;">
            <label for="new-username">New Username</label>
            <input type="text" id="new-username" name="new-username" required>
            
            <label for="new-password">New Password</label>
            <input type="password" id="new-password" name="new-password" required>

            <button type="submit">Register</button>
        </form>

        <!-- Toggle between Login and Registration forms -->
        <p id="toggle-form-text">Don't have an account? <a href="#" id="toggle-form-link" onclick="toggleForms()">Register here</a></p>
    </div>

    <div id="video-container" style="display: none;">
        <!-- Replace 'YOUR_YOUTUBE_EMBED_CODE' with the actual embed code from YouTube -->
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/f0oy-NicIgE?si=l27BYZ4AM4uiTWCX" frameborder="0" allowfullscreen></iframe>
    </div>

    <p id="login-count" style="display: none;">Login Count: 1</p>
    <p id="view-count" style="display: none;">View Count: 1</p>

    <div id="background-message" style="display: none; background-color: black; color: white; text-align: center; padding: 20px;">
        <p>Free Palestine</p>
    </div>

    <script src="script.js"></script>
    <script>
        // Set the initial login count and view count
        let loginCount = 1;
        let viewCount = 1;

        function showVideo() {
            // Increment the login count
            loginCount++;

            // Increment the view count
            viewCount++;

            // Update the login count and view count displayed on the page
            document.getElementById('login-count').textContent = 'Login Count: ' + loginCount;
            document.getElementById('view-count').textContent = 'View Count: ' + viewCount;

            // Show the login count and view count
            document.getElementById('login-count').style.display = 'block';
            document.getElementById('view-count').style.display = 'block';

            // Hide the login container
            document.getElementById('login-container').style.display = 'none';

            // Show the video container
            document.getElementById('video-container').style.display = 'block';

            // Show the background message
            document.getElementById('background-message').style.display = 'block';
        }

        function toggleForms() {
            // Toggle between Login and Registration forms
            const loginForm = document.getElementById('login-form');
            const registrationForm = document.getElementById('registration-form');

            if (loginForm.style.display === 'none') {
                // If the registration form is currently displayed, switch to the login form
                loginForm.style.display = 'block';
                registrationForm.style.display = 'none';
            } else {
                // If the login form is currently displayed, switch to the registration form
                loginForm.style.display = 'none';
                registrationForm.style.display = 'block';
            }
        }
    </script>
</body>
</html>
