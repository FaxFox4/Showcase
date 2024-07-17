document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const hero = document.querySelector('.hero');
    const ctaButton = document.getElementById('cta-button');
    const fireOverlay = document.getElementById('fire-overlay');

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

    function transitionToNextPage(url) {
        fireOverlay.style.display = 'block';
        fireOverlay.style.opacity = '1';
        fireOverlay.querySelector('video').play();

        setTimeout(() => {
            window.location.href = url; // Redirect to the specified URL
        }, 1500); // Adjust timing as needed for smooth transition
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            transitionToNextPage(event.target.href);
        });
    });

    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        transitionToNextPage('next-section.html'); // Redirect to the next section HTML
    });
});
