document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        const rocket = document.querySelector('.rocket');
        const changeRocket = document.querySelector('.change-rocket');
      
        // Wait for rocket animation to finish
        setTimeout(() => {
          rocket.style.display = 'none'; // Hide rocket
          changeRocket.classList.remove('hidden'); // Show the second image
          changeRocket.classList.add('show');
        }, 800); // match duration of animation
      });
      
})