// =========================
// BUTTON
// =========================

const watchBtn =
    document.getElementById("watch-btn");


// =========================
// CLICK EVENT
// =========================

watchBtn.addEventListener("click", function () {

    // Đổi text button
    watchBtn.innerHTML =
        "✨ Loading Vlog...";

    // Disable button
    watchBtn.disabled = true;

    // Delay giả lập
    setTimeout(function () {

        // Hiện thông báo
        alert(
            "🎬 Welcome to My First Vlog!"
        );

        // Reset button
        watchBtn.innerHTML =
            '<i class="ri-play-circle-line"></i> Watch Vlog';

        // Enable lại
        watchBtn.disabled = false;

    }, 1200);

});

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

    // Nếu chưa phát
    if (!isPlaying) {

        // Play music
        bgMusic.play();

        // Update state
        isPlaying = true;

        // Change button text
        watchBtn.innerHTML =
            '<i class="ri-pause-circle-line"></i> Pause Music';

    }

    // Nếu đang phát
    else {

        // Pause music
        bgMusic.pause();

        // Update state
        isPlaying = false;

        // Reset button
        watchBtn.innerHTML =
            '<i class="ri-play-circle-line"></i> Play Music';

    }

});