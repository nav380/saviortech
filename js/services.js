document.addEventListener('DOMContentLoaded', () => {



    //services

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
        const delay = (index + 1) * 100; // stagger animation
        const featuresHTML = service.features.map(feature =>
            `<li class="flex items-center text-gray-600">
            <i class="fas fa-check-circle text-green-500 mr-2"></i> ${feature}
        </li>`).join('');

        const cardHTML = `
    <div class="bg-white rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <i class="${service.icon} text-green-600 text-2xl"></i>
        </div>
        <h3 class="text-xl font-bold mb-2 text-gray-800">${service.title}</h3>
        <p class="text-gray-600 mb-4">${service.description}</p>
        <ul class="space-y-1 mb-4">
            ${featuresHTML}
        </ul>
        <a href="#contact" class="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
            Learn More <i class="fas fa-arrow-right ml-2"></i>
        </a>
    </div>`;

        servicesGrid.innerHTML += cardHTML;
    });



    // extra services
    const additionalServices = [
        { title: "Resume Building & Optimization" },
        { title: "LinkedIn Profile Makeover" },
        { title: "Mock Interviews" },
        { title: "Career Counseling & Guidance" },
        { title: "Skill Assessment Tests" },
        { title: "Soft Skills & Communication Training" },
        { title: "Job Alerts & Placement Notifications" },
        { title: "Freelancing & Gig Work Guidance" },
        { title: "Internship Assistance" },
        { title: "Overseas Placement Assistance" },
        { title: "Portfolio Website Development" },
        { title: "Access to Exclusive Job Fairs" }
    ];


    const grid = document.getElementById('services-grid');

    additionalServices.forEach(service => {
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer text-gray-800 font-medium text-lg";
        card.textContent = service.title;
        grid.appendChild(card);
    });
});
