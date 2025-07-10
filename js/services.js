document.addEventListener('DOMContentLoaded', () => {
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
  