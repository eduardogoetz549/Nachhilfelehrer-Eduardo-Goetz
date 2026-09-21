// Mobile Navigation Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Header Scroll Effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// QUALIFIKATIONEN – Dokument öffnen
document.querySelectorAll('.qualification-link').forEach(link => {
    link.addEventListener('click', () => {
        const file = link.getAttribute('data-doc');
        window.open(file, '_blank');
    });
});
