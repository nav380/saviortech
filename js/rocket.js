document.addEventListener('DOMContentLoaded', () => {
  const rocketContainer = document.querySelector('.rocket-container');
  const rocket = document.querySelector('.rocket');
  const changeRocket = document.querySelector('.change-rocket');

  if (rocketContainer && rocket && changeRocket) {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  console.log('🔥 Section in view: Starting rocket animation');

                  // Start fly-up animation
                  rocket.classList.add('fly-up');

                  // Fade in second image after rocket flies up
                  rocket.addEventListener('animationend', () => {
                      changeRocket.classList.add('show');
                  });

                  // Only trigger once
                  observer.unobserve(rocketContainer);
              }
          });
      }, {
          threshold: 0.1 // Trigger when 40% of section is visible
      });

      observer.observe(rocketContainer);
  }
});
