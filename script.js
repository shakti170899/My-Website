document.getElementById('login-button').addEventListener('click', function() {
    var userId = document.getElementById('user-id').value;
    var password = document.getElementById('password').value;
    
    // Dummy credentials for demonstration
    var validUserId = 'SD12345';
    var validPassword = 'SD@12345';
    
    if (userId === validUserId && password === validPassword) {
        // Redirect to main page on successful login
        window.location.href = 'main_page.html';
    } else {
        alert('Invalid User ID or Password');
    }
});
