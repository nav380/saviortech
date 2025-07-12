document.addEventListener('DOMContentLoaded', () => {


    const answers = [
        "Yes, we provide placement assistance and have partnered with top companies across various industries.",
        "We have a proven placement success rate of 97%, helping thousands of candidates secure their dream jobs.",
        "We work with leading MNCs, startups, and Fortune 500 companies in IT, finance, healthcare, and more.",
        "No, our placement services are completely free for students. We aim to make career opportunities accessible to all.",
        "Yes, freshers are welcome to apply. We have a wide range of entry-level positions available.",
        "Yes, we offer resume building guidance and templates to help you stand out.",
        "Yes, we provide interview preparation resources including tips, mock interviews, and training modules."
    ];

    window.answers = answers; // expose answers if needed

    const questions = [
        "Do you provide placements?",
        "What is your placement success rate?",
        "Which companies hire through your platform?",
        "Do you charge students for placements?",
        "Can freshers apply through your site?",
        "Do you assist with resume building?",
        "Do you provide interview preparation support?"
    ];


    const container = document.getElementById('questionbox');

    questions.forEach((question, index) => {
        const button = document.createElement('button');
        button.textContent = question;
        button.className = "bg-indigo-500 text-white px-5 py-3 rounded-lg shadow hover:bg-indigo-600 transition w-full ";
        button.onclick = () => speak(index);
        container.appendChild(button);
    });
});

// Make speak globally available
function speak(index) {
    const dialog = document.getElementById("dialog-text");
    const speechBubble = document.getElementById("speech-bubble");
    const hand = document.getElementById("wavehand");

    if (!dialog || !speechBubble || !hand) {
        console.error("One or more elements not found: dialog, speechBubble, hand");
        return;
    }


    // Hide waving hand
    hand.style.display = "none";

    // Reset scale instantly
    speechBubble.style.transform = "scale(0)";

    // Delay and then scale up smoothly
    setTimeout(() => {
        speechBubble.style.transform = "scale(1)";
    }, 400);

    // Set the answer text after scale-up animation starts
    setTimeout(() => {
        dialog.textContent = answers[index];
    }, 200);
}




