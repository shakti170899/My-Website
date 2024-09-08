document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    
    // Define the valid credentials
    const validCredentials = [
        { userID: 'Shakti17', password: 'SD@12345' },
        { userID: 'Wood_17', password: 'BD@12345' },
        { userID: 'Cshakti17', password: 'CD12345' } // Added new credentials
    ];
    
    // Check if the entered credentials match any of the valid credentials
    const isValid = validCredentials.some(cred => cred.userID === userID && cred.password === password);
    
    if (isValid) {
        alert('Hi Fu*king Wooden House Member, Press Enter And Enter Your Childhood!');
        // Hide the login section and show the gallery section
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('gallery').style.display = 'flex';
        
        // Populate the gallery with videos
        createVideoElements();
    } else {
        alert('Boka*hoda Password Vul Diyechis.');
    }
});

function createVideoElements() {
    const videoPaths = [
    "https://www.youtube.com/watch?v=2n00wX0cj0w", 
];

const gallery = document.querySelector('.gallery');

videoPaths.forEach(path => {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');
    
    const video = document.createElement('video');
    video.controls = true;
    
    const source = document.createElement('source');
    source.src = path;
    source.type = 'video/mp4';
    
    video.appendChild(source);
    videoContainer.appendChild(video);
    gallery.appendChild(videoContainer);
});
}
