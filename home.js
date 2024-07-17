document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const hero = document.querySelector('.hero');
    const ctaButton = document.querySelector('.cta-button');
    const lightningOverlay = document.getElementById('lightning-overlay');
    const header = document.querySelector('header');
    const body = document.body;

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

        lightningOverlay.style.top = `${headerHeight - overlayHeight * 0.3}px`; // Move the start further up
        lightningOverlay.style.height = `${overlayHeight * 1.3}px`; // Further increase the size

        // Add the lightning effect class to the button
        ctaButton.classList.add('lightning-effect');

        // Show the lightning overlay
        lightningOverlay.style.display = 'block';
        setTimeout(() => {
            lightningOverlay.style.opacity = '1';
            body.style.transform = 'scale(5)'; // Dramatic zoom in effect
        }, 10);

        // After the lightning effect, navigate to the next section
        setTimeout(() => {
            lightningOverlay.style.opacity = '0';
            setTimeout(() => {
                window.location.href = 'next-section.html'; // Redirect to the next section HTML
            }, 200);
        }, 300); // Duration of the lightning effect
    });
});
