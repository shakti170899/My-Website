document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const loginError = document.getElementById('login-error');

    loginButton.addEventListener('click', () => {
        // Retrieve values from input fields
        const userId = document.getElementById('user-id').value;
        const password = document.getElementById('password').value;

        // Dummy login credentials
        const validUserId = 'SD12345';
        const validPassword = 'SD@12345';

        // Validate credentials
        if (userId === validUserId && password === validPassword) {
            // Redirect to the main page on successful login
            window.location.href = 'main-page.html';
        } else {
            // Show error message
            loginError.textContent = 'Invalid User ID or Password';
            loginError.style.display = 'block';
        }
    });
});
