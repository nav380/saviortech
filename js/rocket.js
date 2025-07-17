document.addEventListener('DOMContentLoaded', () => {
    const rocketContainer = document.querySelector('.rocket-container');
    const rocket = document.querySelector('.rocket');
    const changeRocket = document.querySelector('.change-rocket');

    if (rocketContainer && rocket && changeRocket) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('🔥 Section in view: Starting rocket animation');

                    // Reset and re-add fly-up animation
                    rocket.classList.remove('fly-up');
                    void rocket.offsetWidth; // Force reflow
                    rocket.classList.add('fly-up');

                    rocket.addEventListener('animationend', () => {
                        changeRocket.classList.add('show');
                    }, { once: true });

                    // Mobile fallback (animationend sometimes doesn’t fire)
                    setTimeout(() => {
                        if (!changeRocket.classList.contains('show')) {
                            changeRocket.classList.add('show');
                        }
                    }, 3000);

                    observer.unobserve(rocketContainer);
                }
            });
        }, {
            threshold: 0.1 // ✅ Lower threshold for mobile
        });

        observer.observe(rocketContainer);

        // ✅ Manual check in case section is already visible on load (mobile fix)
        const rect = rocketContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            rocket.classList.add('fly-up');
            changeRocket.classList.add('show');
            observer.unobserve(rocketContainer);
        }
    }
});
