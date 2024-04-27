// Toogle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })

    // Sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

const historyBtnMostrar = document.querySelector('#history-btn-mostrar');
historyBtnMostrar.addEventListener('click', () => {

    const history = document.querySelector('#history');
    const historyBtnContacto = document.querySelector('#history-btn-contacto');
    const historySci = document.querySelector('#history-sci');
    history.classList.remove('no-visible');
    history.classList.add('visible');
    historyBtnMostrar.classList.remove('visible');
    historyBtnMostrar.classList.add('no-visible');
    historyBtnContacto.classList.remove('no-visible');
    historyBtnContacto.classList.add('visible');
    historySci.classList.remove('no-visible');
    historySci.classList.add('visible');
})