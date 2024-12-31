// Autoplay background audio with user interaction
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

// Form submission for email
document.getElementById('emailForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            const responseData = await response.text();
            alert('Email sent successfully: ' + responseData);
        } else {
            const errorText = await response.text();
            alert('Error sending email: ' + errorText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('An error occurred: ' + error.message);
    }
});