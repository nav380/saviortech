document.addEventListener('DOMContentLoaded', () => {
    const additionalServices = [
      { title: "Management Reporting System" },
      { title: "Machine Maintenance" },
      { title: "Time and Action" },
      { title: "HRMS" },
      { title: "Compliance Management" },
      { title: "Visitor Management" },
      { title: "Virtual Showroom" },
      { title: "Vendor Portal" }
    ];
  
    const grid = document.getElementById('services-grid');
  
    additionalServices.forEach(service => {
      const card = document.createElement('div');
      card.className = "bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer text-gray-800 font-medium text-lg";
      card.textContent = service.title;
      grid.appendChild(card);
    });
  });
  