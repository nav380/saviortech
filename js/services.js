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
                <i class="fas fa-check-circle text-cyan-500 mr-2"></i> ${feature}
            </li>
        `).join('');
    
        const cardHTML = `
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-700 ease-out group border border-gray-100" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="p-6 flex flex-col h-full justify-between">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
                    <i class="${service.icon} text-cyan-600 text-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-125"></i>
                </div>
                <!-- Title -->
                <h3 class="text-xl font-semibold text-gray-800 mb-2 group-hover:text-cyan-600">${service.title}</h3>
                <!-- Description -->
                <p class="text-gray-500 mb-4 text-sm">${service.description}</p>
                <!-- Features -->
                <ul class="space-y-1 mb-5">
                    ${featuresHTML}
                </ul>
                <!-- Learn More Button -->
                <a href="#contact" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300 shadow-md">
                    Learn More <i class="fas fa-arrow-right"></i>
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
            bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl 
            transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out
            flex flex-col items-center text-center space-y-4 border border-gray-100
        `;
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", delay);
    
        card.innerHTML = `
            <div class="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                <i class="${service.icon} text-white text-2xl"></i>
            </div>
            <h4 class="text-lg font-bold text-gray-800">${service.title}</h4>
        `;
    
        grid.appendChild(card);
    });
    
});
