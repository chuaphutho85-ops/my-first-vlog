// =========================
// ELEMENTS
// =========================

const watchBtn =
    document.getElementById("watch-btn");

const bgMusic =
    document.getElementById("bg-music");


// =========================
// MUSIC STATE
// =========================

let isPlaying = false;


// =========================
// BUTTON EVENT
// =========================

watchBtn.addEventListener("click", function () {

    // PLAY
    if (!isPlaying) {

        bgMusic.play();

        isPlaying = true;

        watchBtn.innerHTML =
            '<i class="ri-pause-circle-line"></i> Pause Music';
    }

    // PAUSE
    else {

        bgMusic.pause();

        isPlaying = false;

        watchBtn.innerHTML =
            '<i class="ri-play-circle-line"></i> Play Music';
    }

});