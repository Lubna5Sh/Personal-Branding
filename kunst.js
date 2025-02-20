const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } else {
        video.pause();
        playPauseBtn.textContent = "Afspil";
    }
});

