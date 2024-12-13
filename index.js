document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-audio");

    // Play the background audio as soon as the page loads
    audio.autoplay = true;
    audio.loop = true;

    // Ensure autoplay works in compliance with browser restrictions
    audio.play().catch(() => {
        console.log("Autoplay requires user interaction or user settings.");
    });
});