document.addEventListener('DOMContentLoaded', () => {
    const PaymentOptions = [
        {
            icon: "fas fa-shopping-bag",
            title: "Starter Pack",
            description: "Great for freshers starting their journey.",
            amount: "₹5000",
            originalAmount: "₹6000",
            discount: "Save 20%",
            features: [
                { name: "ATS-friendly resume", included: true },
                { name: "10 interviews within 90 days", included: true },
                { name: "Job alerts for 90 days", included: true },
                { name: "Email support included", included: true },
                { name: "Portfolio setup assistance", included: false },
                { name: "LinkedIn profile optimization", included: false },
                { name: "24x7 customer support", included: true }
            ]
        },
        {
            icon: "fas fa-university",
            title: "Professional Pack",
            description: "Best for professionals ready to step up.",
            amount: "₹10000",
            originalAmount: "₹12000",
            badge: "Best Value",
            discount: "Save 20%",
            features: [
                { name: "ATS-friendly resume", included: true },
                { name: "15 interviews within 90 days", included: true },
                { name: "Job alerts for 90 days", included: true },
                { name: "Email support included", included: true },
                { name: "Portfolio setup assistance", included: true },
                { name: "LinkedIn profile optimization", included: true },
                { name: "24x7 customer support", included: true }
            ]
        },
        {
            icon: "fas fa-credit-card",
            title: "Premium Pack",
            description: "Perfect for leaders targeting senior roles.",
            amount: "₹13000",
            originalAmount: "₹15600",
            discount: "Save 20%",
            features: [
                { name: "ATS-friendly resume", included: true },
                { name: "15 interviews within 90 days", included: true },
                { name: "Job alerts for 90 days", included: true },
                { name: "Email support included", included: true },
                { name: "Custom Portfolio setup ", included: true },
                { name: "LinkedIn profile optimization", included: true },
                { name: "24x7 customer support", included: true }
            ]
        }
    ];

    const PaymentGrid = document.getElementById('payment-grid');

    PaymentOptions.forEach((option, index) => {
        const delay = (index + 1) * 100;

        const featuresHTML = option.features.map(feature => `
            <li class="flex items-center text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}">
                <i class="fas ${feature.included ? 'fa-check-circle text-green-500' : 'fa-times-circle text-red-400'} mr-2"></i>
                ${feature.name}
            </li>
        `).join('');

        const badgeHTML = option.badge ? `
            <span class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl shadow-md">
                ${option.badge}
            </span>
        ` : '';

        const discountHTML = option.discount ? `
            <div class="absolute -top-3 -left-3 bg-yellow-400 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full shadow">
                ${option.discount}
            </div>
        ` : '';

        const cardHTML = `
        <div class="relative bg-white text-gray-800 rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.05] transition-all duration-500 ease-out group" data-aos="fade-up" data-aos-delay="${delay}">
            ${badgeHTML}
            ${discountHTML}
            <div class="p-6 flex flex-col h-full justify-between">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-tr from-yellow-100 to-pink-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    <i class="${option.icon} text-yellow-600 text-3xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-125"></i>
                </div>
                <!-- Title -->
                <h3 class="text-xl font-bold mb-1 group-hover:text-yellow-600">${option.title}</h3>
                <!-- Amount -->
                <div class="flex items-center space-x-2 mb-3">
                    p class="text-2xl font-extrabold text-yellow-600">
        ${option.amount} <span class="text-sm font-medium text-gray-500">+ GST</span>
    </p>
    <p class
                    <p class="text-sm line-through text-gray-400">${option.originalAmount}</p>
                </div>
                <!-- Description -->
                <p class="text-gray-600 mb-4 text-sm">${option.description}</p>
                <!-- Features -->
                <ul class="space-y-1 mb-5">
                    ${featuresHTML}
                </ul>
                <!-- CTA Button -->
                <a href="#contact" class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-md">
                    Buy Now <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>`;
        
        PaymentGrid.innerHTML += cardHTML;
    });
});
