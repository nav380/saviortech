document.addEventListener('DOMContentLoaded', () => {

    
    const students = [
        { name: "Alice Johnson", role: "Web Developer", photo: "https://randomuser.me/api/portraits/women/44.jpg", review: "This course changed my life! I now work at a top tech company." },
        { name: "David Smith", role: "UI/UX Designer", photo: "https://randomuser.me/api/portraits/men/32.jpg", review: "Amazing! I built my portfolio and got hired fast." },
        { name: "Sophia Lee", role: "Frontend Engineer", photo: "https://randomuser.me/api/portraits/women/68.jpg", review: "I’m now confident in HTML, Tailwind, and JavaScript!" },
        { name: "Michael Brown", role: "Full Stack Developer", photo: "https://randomuser.me/api/portraits/men/75.jpg", review: "The teaching was incredible. Highly recommended!" },
        { name: "Emily Davis", role: "Backend Developer", photo: "https://randomuser.me/api/portraits/women/21.jpg", review: "Helped me get my first developer job!" },
        { name: "John Wilson", role: "React Developer", photo: "https://randomuser.me/api/portraits/men/22.jpg", review: "Built my dream portfolio!" },
        { name: "Sophia Miller", role: "Designer", photo: "https://randomuser.me/api/portraits/women/30.jpg", review: "I can now design beautiful interfaces." },
        { name: "Chris Taylor", role: "Software Engineer", photo: "https://randomuser.me/api/portraits/men/45.jpg", review: "A complete game-changer for my career." },
        { name: "Olivia Moore", role: "App Developer", photo: "https://randomuser.me/api/portraits/women/55.jpg", review: "Now I create amazing mobile apps." },
        { name: "Daniel Anderson", role: "Tech Lead", photo: "https://randomuser.me/api/portraits/men/60.jpg", review: "I lead a team thanks to these skills." }
    ];

    const slider = document.getElementById('slider');

    // Duplicate slides for seamless scroll
    const loopSlides = [...students, ...students, ...students];

    loopSlides.forEach(student => {
        const card = document.createElement('div');
        card.className = `
            slide w-72 flex-shrink-0 bg-white rounded-2xl shadow-xl 
            text-center p-6 transform hover:scale-105 transition-transform duration-300
            border border-gray-100
        `;
        card.innerHTML = `
            <div class="relative">
                <img src="${student.photo}" alt="${student.name}"
                     class="w-24 h-24 mx-auto rounded-full border-4 border-cyan-400 shadow-lg">
                <div class="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                    ★
                </div>
            </div>
            <h3 class="mt-4 text-lg font-semibold text-gray-800">${student.name}</h3>
            <p class="text-sm text-cyan-600 font-medium mb-2">${student.role}</p>
            <p class="text-gray-600 italic">“${student.review}”</p>
        `;
        slider.appendChild(card);
    });
    

    const slideWidth = slider.querySelector('.slide').offsetWidth + 24; // slide width + gap
    let offset = 0;

    function animateSlider() {
        offset += 0.3; // speed
        slider.style.transform = `translateX(-${offset}px)`;

        if (offset >= slideWidth * students.length) {
            offset -= slideWidth * students.length; // seamless loop
            slider.style.transform = `translateX(-${offset}px)`;
        }

        requestAnimationFrame(animateSlider);
    }

    animateSlider();




    // Sticky background image change
 


});
