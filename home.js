document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const hero = document.querySelector('.hero');
    const ctaButton = document.querySelector('.cta-button');
    const lightningOverlay = document.getElementById('lightning-overlay');
    const header = document.querySelector('header');

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

    ctaButton.addEventListener('click', () => {
        // Calculate the height and position for the lightning overlay
        const buttonRect = ctaButton.getBoundingClientRect();
        const headerHeight = header.offsetHeight;
        const overlayHeight = buttonRect.top - headerHeight;

        lightningOverlay.style.top = `${headerHeight - overlayHeight * 0.2}px`; // Move the start up
        lightningOverlay.style.height = `${overlayHeight * 1.2}px`; // Slightly increase the size

        // Add the lightning effect class to the button
        ctaButton.classList.add('lightning-effect');

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
        }, 700); // Duration of the lightning effect
    });
});
