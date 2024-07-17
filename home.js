document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const hero = document.querySelector('.hero');
    const ctaButton = document.getElementById('cta-button');

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
        window.location.href = 'next-section.html'; // Redirect to the next section HTML
    });
});
