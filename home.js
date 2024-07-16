document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const hero = document.querySelector('.hero');
    const ctaButton = document.querySelector('.cta-button');
    const lightningButton = document.getElementById('lightning-button');
    const lightningOverlay = document.getElementById('lightning-overlay');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(window.location.pathname)) {
                link.classList.add('active');
            }
        });
    });

    ctaButton.addEventListener('mouseover', () => {
        ctaButton.classList.add('animated');
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.classList.remove('animated');
    });

    lightningButton.addEventListener('click', () => {
        // Show the lightning overlay
        lightningOverlay.style.display = 'block';
        setTimeout(() => {
            lightningOverlay.style.opacity = '1';
        }, 10);

        // After the lightning effect, navigate to the next section
        setTimeout(() => {
            lightningOverlay.style.opacity = '0';
            setTimeout(() => {
                lightningOverlay.style.display = 'none';
                window.location.href = 'next-section.html'; // Redirect to the next section HTML
            }, 500);
        }, 1000); // Duration of the lightning effect
    });
});
