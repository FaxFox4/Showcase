// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        burger.classList.toggle('toggle');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close the burger menu on link click
        const nav = document.getElementById('nav');
        nav.classList.remove('active');
        const burger = document.getElementById('burger');
        burger.classList.remove('toggle');
    });
});
