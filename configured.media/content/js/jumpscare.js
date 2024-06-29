$(document).ready(function() {
    // Function to play a scary sound
    function playSound() {
        var audio = new Audio('content/assets/audio/SHRIEK.wav');
        audio.play();
    }

    // Function to show the jump scare in a new window
    function showJumpScare() {
        $.get('content/windows/jumpscare.html', function(data) {
            var scareWindow = window.open('', 'jumpScareWindow', 'width=800,height=600');
            scareWindow.document.write(data);
            playSound();
            setTimeout(function() {
                scareWindow.close();
            }, 3000); // Jump scare lasts for 3 seconds
        });
    }

    // 1/10 chance to trigger the jump scare
    if (Math.random() < 0.99) {
        showJumpScare();
    }
});
