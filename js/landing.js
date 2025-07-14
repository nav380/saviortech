document.addEventListener('DOMContentLoaded', () => {

  


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

    const canvas = document.getElementById('starCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cursorGlow = document.getElementById('cursorGlow');

    let stars = [];
    for (let i = 0; i < 25; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 8,
            speed: Math.random() * 0.6 + 0.2,
            rotation: Math.random() * Math.PI * 2,
            twinkle: Math.random() * 100
        });
    }

    function drawAsterisk(x, y, size, rotation, alpha) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;

        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(-size, 0);
            ctx.lineTo(size, 0);
            ctx.stroke();
            ctx.rotate(Math.PI / 3);
        }

        ctx.restore();
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            let twinkleAlpha = 0.5 + Math.abs(Math.sin(star.twinkle / 15)) * 0.5;
            drawAsterisk(star.x, star.y, star.size, star.rotation, twinkleAlpha);

            star.y += star.speed;
            star.rotation += 0.01;
            star.twinkle += 1;

            if (star.y > canvas.height) {
                star.y = -star.size;
                star.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateStars);
    }

    // Cursor Glow Movement
    window.addEventListener('mousemove', (e) => {
        const cursorY = e.clientY;
        const viewportHeight = window.innerHeight;

        // Calculate Y position in vh
        const cursorVh = (cursorY / viewportHeight) * 100;

        // Check if cursor is between 8vh and 100vh
        if (cursorVh >= 8 && cursorVh <= 100) {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    animateStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });


})