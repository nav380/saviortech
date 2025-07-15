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

        const container = document.getElementById('testimonial-container');

        // Dynamically generate testimonial cards
        students.forEach(student => {
            const card = document.createElement('div');
            card.className = 'testimonial bg-white p-6 rounded-lg text-center';
            card.innerHTML = `
      <div>
        <img src="${student.photo}" alt="${student.name}" 
              class="w-24 h-24 mx-auto rounded-full border-4 border-cyan-400 shadow-lg">
                <div class="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                    ★
                </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-800">${student.name}</h3>
            <p class="text-sm text-cyan-600 font-medium mb-2">${student.role}</p>
            <p class="text-gray-600 italic">“${student.review}”</p>
      `;
            container.appendChild(card);

        });

        const testimonials = container.querySelectorAll('.testimonial');
        let current = 0;

        function updateTestimonials() {
            testimonials.forEach((item, index) => {
                item.classList.remove('active', 'left1', 'left2', 'right1', 'right2', 'hide');

                if (index === current) {
                    item.classList.add('active');
                } else if (index === (current - 1 + testimonials.length) % testimonials.length) {
                    item.classList.add('left1');
                } else if (index === (current - 2 + testimonials.length) % testimonials.length) {
                    item.classList.add('left2');
                } else if (index === (current + 1) % testimonials.length) {
                    item.classList.add('right1');
                } else if (index === (current + 2) % testimonials.length) {
                    item.classList.add('right2');
                } else {
                    item.classList.add('hide');
                }
            });
        }


        function updateDots(current) {
            const dotsContainer = document.getElementById('dots');
            dotsContainer.innerHTML = '';
            testimonials.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.className = 'w-3 h-3  rounded-full cursor-pointer';
                if (index === current) {
                    dot.classList.add('bg-cyan-500');
                    console.log(`Current dot: ${index}`);
                } else {
                    dot.classList.add('bg-gray-400');
                }
                dot.addEventListener('click', () => {
                    current = index;
                    updateTestimonials();
                    updateDots();
                });
                dotsContainer.appendChild(dot);
            });
        }


        function autoSlide() {
            current = (current + 1) % testimonials.length;
            updateTestimonials();
            updateDots(current);
        }


        document.getElementById('prevBtn').addEventListener('click', () => {
            current = (current - 1 + testimonials.length) % testimonials.length;
            updateTestimonials();
            updateDots(current);
            resetAutoSlide(); // Reset auto-slide timer on manual navigation
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            current = (current + 1) % testimonials.length;
            updateTestimonials();
            updateDots(current);
            resetAutoSlide(); // Reset auto-slide timer on manual navigation
        });

        let autoSlideTimer = setInterval(autoSlide, 3500); // Start auto-slide

        function resetAutoSlide() {
            clearInterval(autoSlideTimer); // Stop current timer
            autoSlideTimer = setInterval(autoSlide, 3500); // Restart
        }


        updateTestimonials();
        updateDots(current);
  




    // Sticky background image change
 


});
