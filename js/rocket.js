document.addEventListener('DOMContentLoaded', () => {
  const rocketContainer = document.querySelector('.rocket-container');
  const rocket = document.querySelector('.rocket');
  const changeRocket = document.querySelector('.change-rocket');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Start rocket fly-up animation
              rocket.classList.add('fly-up');

              // After fly-up ends, fade in the second image
              rocket.addEventListener('animationend', () => {
                  changeRocket.classList.add('show');
              });

              // Stop observing once triggered
              observer.unobserve(rocketContainer);
          }
      });
  }, { threshold: 0.3 }); // Trigger when 30% of container visible

  observer.observe(rocketContainer);
});
