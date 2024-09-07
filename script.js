document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (!menuToggle) {
        console.error('Menu toggle element not found');
        return;
    }

    if (!navLinks) {
        console.error('Navigation links element not found');
        return;
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
