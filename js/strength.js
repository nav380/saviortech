document.addEventListener('DOMContentLoaded', () => {

    const strengths = [
        {
            icon: "fas fa-user-tie",
            color: "text-green-600",
            title: "Expert Career Guidance",
            points: [
                "One-on-one career counseling",
                "Personalized job search strategies",
                "Insights from industry professionals"
            ]
        },
        {
            icon: "fas fa-laptop-code",
            color: "text-green-600",
            title: "Skill Development",
            points: [
                "Training on latest industry tools",
                "Soft skills and communication workshops",
                "Resume and LinkedIn profile optimization"
            ]
        },
        {
            icon: "fas fa-briefcase",
            color: "text-green-600",
            title: "Job Connections",
            points: [
                "Access to exclusive job listings",
                "Direct referrals to top companies",
                "Partnerships with hiring agencies"
            ]
        },
        {
            icon: "fas fa-headset",
            color: "text-green-600",
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
        const delay = (index + 1) * 100; // AOS animation delay
    
        const pointsHTML = strength.points.map(point =>
            `<li class="flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>${point}
            </li>`).join('');
    
        const cardHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="${strength.color} text-4xl mb-4"><i class="${strength.icon}"></i></div>
            <h4 class="text-xl font-bold mb-3">${strength.title}</h4>
            <ul class="text-gray-600 space-y-2">
                ${pointsHTML}
            </ul>
        </div>`;
    
        strengthsGrid.innerHTML += cardHTML;
    });
    
});
