document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slideshow-slide');
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('opacity-100');
        slides[current].classList.add('opacity-0');

        current = (current + 1) % slides.length;

        slides[current].classList.remove('opacity-0');
        slides[current].classList.add('opacity-100');
    }, 4000);


    let isScrolling = false;
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;
    
        // Check if user is scrolling down
        if (scrollTop > lastScrollTop) {
            if (!isScrolling && scrollTop > 50 && scrollTop < viewportHeight) {
                isScrolling = true;
                // Smoothly scroll to #hero-banner
                document.querySelector('#hero-banner').scrollIntoView({
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    isScrolling = false;
                }, 800); // wait for scroll to finish
            }
        }
    
        // Update last scroll position
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // prevent negative
    });
    


})