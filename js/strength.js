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
                <i class="fas fa-check-circle text-cyan-500 mr-3 mt-1"></i>
                <span>${point}</span>
            </li>
        `).join('');
    
        const cardHTML = `
        <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100
                    transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out group"
             data-aos="fade-up" data-aos-delay="${delay}">
            <!-- Icon -->
            <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 
                        flex items-center justify-center mb-5 shadow-inner">
                <i class="${strength.icon} ${strength.color} text-2xl transition-transform duration-500 group-hover:scale-125"></i>
            </div>
            <!-- Title -->
            <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                ${strength.title}
            </h4>
            <!-- Points -->
            <ul class="space-y-2 text-sm leading-relaxed">
                ${pointsHTML}
            </ul>
        </div>`;
    
        strengthsGrid.innerHTML += cardHTML;
    });
    
});
