// ✅ JSON Data
const students = [
    {
      "name": "Alice Johnson",
      "role": "Web Developer",
      "photo": "https://randomuser.me/api/portraits/women/44.jpg",
      "review": "This course changed my life! I now work at a top tech company."
    },
    {
      "name": "David Smith",
      "role": "UI/UX Designer",
      "photo": "https://randomuser.me/api/portraits/men/32.jpg",
      "review": "Amazing! I built my portfolio and got hired fast."
    },
    {
      "name": "Sophia Lee",
      "role": "Frontend Engineer",
      "photo": "https://randomuser.me/api/portraits/women/68.jpg",
      "review": "I’m now confident in HTML, Tailwind, and JavaScript!"
    },
    {
      "name": "Michael Brown",
      "role": "Full Stack Developer",
      "photo": "https://randomuser.me/api/portraits/men/75.jpg",
      "review": "The teaching was incredible. Highly recommended!"
    }
  ];
  
  const slider = document.getElementById('slider');
  
  // ✅ Render Slides
  students.forEach((student) => {
    const card = document.createElement('div');
    card.className = "w-72 p-4 bg-white rounded-lg shadow-lg text-center transition-all duration-500 ease-in-out";
    card.innerHTML = `
      <img src="${student.photo}" alt="${student.name}" class="w-24 h-24 mx-auto rounded-full mb-4">
      <h3 class="text-xl font-bold">${student.name}</h3>
      <p class="text-sm text-gray-500 mb-2">${student.role}</p>
      <p class="text-gray-700">“${student.review}”</p>
    `;
    slider.appendChild(card);
  });
  
  const cards = slider.children;
  let currentIndex = 0;
  
  function updateCarousel() {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('active-card', 'side-card');
      cards[i].style.order = (i - currentIndex + students.length) % students.length;
      if (i === currentIndex) {
        cards[i].classList.add('active-card');
      } else {
        cards[i].classList.add('side-card');
      }
    }
  }
  
  updateCarousel();
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % students.length;
    updateCarousel();
  }, 2000);
  