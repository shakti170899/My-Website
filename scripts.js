document.getElementById('login-button').addEventListener('click', function() {
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;

    const validUserId = 'SD12345';
    const validPassword = 'SD@12345';

    const errorElement = document.getElementById('login-error');

    if (userId === validUserId && password === validPassword) {
        window.location.href = 'main_page.html';
    } else {
        errorElement.textContent = 'Invalid User ID or Password.';
        errorElement.style.display = 'block';
    }
});
