/* General page styling */
body {
    font-family: Arial, sans-serif;
    background-image: url('https://images.moneycontrol.com/static-mcnews/2022/12/Flipkart.jpg?impolicy=website&width=770&height=431');
    background-size: cover;
    background-position: center;
    backdrop-filter: blur(5px);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

/* Container for landscape layout */
.login-container {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.3);
    display: flex; /* Horizontal layout */
    align-items: center;
    justify-content: space-between;
    width: 80%; /* Take up more horizontal space */
    max-width: 1200px;
    gap: 40px; /* Space between the image and the form */
    animation: fadeIn 1.5s ease-in-out;
}

/* Login image with blur effect */
.login-image {
    width: 700px;
    height: 500px;
    border-radius: 0px;
    filter: blur(0px);
    transition: filter 0.3s;
}

.login-image:hover {
    filter: blur(0);
}

/* Input fields and form styling */
.login-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align form items to the left */
}

.login-form label {
    margin-bottom: 5px;
    font-size: 16px;
}

.login-form input {
    margin: 10px 0;
    padding: 12px;
    width: 300px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border 0.3s;
}

.login-form input:focus {
    border: 2px solid #4CAF50;
    outline: none;
}

/* Login button styling */
button {
    padding: 12px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    width: 80%;
}

button:hover {
    background-color: #45a049;
    transform: scale(1.05);
}

/* Forgot password link */
a {
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
}

a:hover {
    color: #4CAF50;
}

/* Error message */
.error-message {
    color: red;
    display: none;
}

/* Footer styling */
footer {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 0;
    font-size: 12px;
}

/* Animation for fade-in effect */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
