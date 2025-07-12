document.addEventListener('DOMContentLoaded', () => {

    // === Primary Services ===
    const services = [
        {
            icon: "fas fa-file-alt",
            title: "Resume Building",
            description: "Create professional, ATS-friendly resumes that stand out to employers.",
            features: [
                "Modern resume templates",
                "Instant suggestions & tips",
                "Export to PDF & Word"
            ]
        },
        {
            icon: "fas fa-chalkboard-teacher",
            title: "Interview Preparation",
            description: "Get ready for success with mock interviews and expert feedback.",
            features: [
                "Mock interviews with experts",
                "Real-time feedback",
                "HR-approved question sets"
            ]
        },
        {
            icon: "fas fa-briefcase",
            title: "Job Listings & Alerts",
            description: "Access verified job openings and get alerts for new opportunities.",
            features: [
                "Curated job postings",
                "Email & SMS alerts",
                "Apply directly from platform"
            ]
        }
    ];

    const servicesGrid = document.getElementById('services-grid');

    services.forEach((service, index) => {
        const delay = (index + 1) * 100;

        const featuresHTML = service.features.map(feature => `
            <li class="flex items-center text-gray-600">
                <i class="fas fa-check-circle text-blue-500 mr-2"></i> ${feature}
            </li>
        `).join('');

        const cardHTML = `
        <div class="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-900 ease-out group" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="p-6">
                <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <i class="${service.icon} text-blue-600 text-2xl group-hover:scale-110 "></i>
                </div>
                <h3 class="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-500 ">${service.title}</h3>
                <p class="text-gray-600 mb-4">${service.description}</p>
                <ul class="space-y-1 mb-4">
                    ${featuresHTML}
                </ul>
                <a href="#contact" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>`;

        servicesGrid.innerHTML += cardHTML;
    });

    // === Additional Services with Icons ===
    const additionalServices = [
        { title: "Resume Building & Optimization", icon: "fas fa-file-alt" },
        { title: "LinkedIn Profile Makeover", icon: "fab fa-linkedin" },
        { title: "Mock Interviews", icon: "fas fa-comments" },
        { title: "Career Counseling & Guidance", icon: "fas fa-user-graduate" },
        { title: "Skill Assessment Tests", icon: "fas fa-tasks" },
        { title: "Soft Skills & Communication Training", icon: "fas fa-comments-dollar" },
        { title: "Job Alerts & Placement Notifications", icon: "fas fa-bell" },
        { title: "Freelancing & Gig Work Guidance", icon: "fas fa-briefcase" },
        { title: "Internship Assistance", icon: "fas fa-handshake" },
        { title: "Overseas Placement Assistance", icon: "fas fa-globe" },
        { title: "Portfolio Website Development", icon: "fas fa-laptop-code" },
        { title: "Access to Exclusive Job Fairs", icon: "fas fa-calendar-check" }
    ];

    const grid = document.getElementById('extra-services-grid');

    additionalServices.forEach((service, index) => {
        const delay = (index + 1) * 50;

        const card = document.createElement('div');
        card.className = `
            bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 
            transition-all duration-700 ease-in-out flex flex-col items-center text-center space-y-3 hover:bg-blue-100 bg-glue-400
        `;
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", delay);

        card.innerHTML = `
            <div class="text-blue-600 text-3xl">
                <i class="${service.icon}"></i>
            </div>
            <h4 class="text-base font-semibold text-gray-800">${service.title}</h4>
        `;

        grid.appendChild(card);
    });
});
