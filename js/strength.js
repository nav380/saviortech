document.addEventListener('DOMContentLoaded', () => {
    const strengths = [
        {
            icon: "fas fa-user-tie",
            color: "text-blue-600",
            title: "Expert Career Guidance",
            points: [
                "One-on-one career counseling",
                "Personalized job search strategies",
                "Insights from industry professionals"
            ]
        },
        {
            icon: "fas fa-laptop-code",
            color: "text-blue-600",
            title: "Skill Development",
            points: [
                "Training on latest industry tools",
                "Soft skills and communication workshops",
                "Resume and LinkedIn profile optimization"
            ]
        },
        {
            icon: "fas fa-briefcase",
            color: "text-blue-600",
            title: "Job Connections",
            points: [
                "Access to exclusive job listings",
                "Direct referrals to top companies",
                "Partnerships with hiring agencies"
            ]
        },
        {
            icon: "fas fa-headset",
            color: "text-blue-600",
            title: "24/7 Support",
            points: [
                "Dedicated career coaches",
                "Real-time assistance during job applications",
                "Post-placement follow-up and mentoring"
            ]
        }
    ];

    const strengthsGrid = document.getElementById('strengths-grid');

    strengths.forEach((strength, index) => {
        const delay = (index + 1) * 100; // AOS stagger

        const pointsHTML = strength.points.map(point => `
            <li class="flex items-start text-gray-600">
                <i class="fas fa-check-circle text-blue-500 mr-2 mt-1"></i>
                <span>${point}</span>
            </li>
        `).join('');

        const cardHTML = `
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out group" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="text-4xl mb-4 ${strength.color}">
                <i class="${strength.icon} group-hover:scale-110 transition-transform duration-300"></i>
            </div>
            <h4 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">${strength.title}</h4>
            <ul class="space-y-2 text-sm leading-relaxed">
                ${pointsHTML}
            </ul>
        </div>`;

        strengthsGrid.innerHTML += cardHTML;
    });
});
