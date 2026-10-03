// ===============================
// MENÚ MÓVIL
// ===============================

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');

    const isOpen = navbar.classList.contains('active');
    menuIcon.setAttribute('aria-expanded', isOpen);
});


// Cerrar menú al pulsar un enlace
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        menuIcon.setAttribute('aria-expanded', 'false');
    });
});


// ===============================
// HEADER + NAVEGACIÓN ACTIVA
// ===============================

const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function updateScroll() {

    const scrollPosition = window.scrollY;

    // Header sticky
    header.classList.toggle('sticky', scrollPosition > 80);

    // Sección activa
    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateScroll);


// ===============================
// ANIMACIONES DE ENTRADA
// ===============================

const animatedSections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedSections.forEach(section => {
    observer.observe(section);
});


// ===============================
// AÑO DEL FOOTER
// ===============================

const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// ESTADO INICIAL
// ===============================

updateScroll();