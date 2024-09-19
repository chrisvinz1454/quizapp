// script.js
document.addEventListener('DOMContentLoaded', function() {
    var clickSound = document.getElementById('click-sound');
    var startButton = document.getElementById('start-btn');
    
    startButton.addEventListener('click', function() {
        clickSound.play().then(function() {
            setTimeout(function() {
                window.location.href = 'Signin.html';
            }, 200); // Delay the redirect to allow the sound to play
        }).catch(function(error) {
            console.error('Error playing sound:', error);
        });
    });
});
