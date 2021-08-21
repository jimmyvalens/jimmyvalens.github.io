let mostrarContenido;

document.addEventListener('DOMContentLoaded', () => {

    eventListeners();

    logoActivity();
});

function eventListeners() {

    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
    mobileMenu.addEventListener('click', animationMenuLines);

    // const logo = document.querySelector('#logo');
    // logo.addEventListener('click', logoActivity);

    // const enlaces = document.querySelectorAll('.navegacion-principal a');

    // enlaces.forEach(function (enlace) {
    //     enlace.addEventListener('click', () => {
    //         // navegacionResponsive();
    //         // animationMenuLines();
    //     })
    // })

    window.addEventListener('scroll', () => {
        const animacion = document.querySelectorAll('.no-visible');
        animacion.forEach(card => {
            let ubicacionCard = card.getBoundingClientRect();
            if (ubicacionCard.top < 400) {
                card.classList.remove('no-visible');
                card.classList.add('visible');
            }
        });
    });
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion-principal');
    const scroll = document.querySelector('html');
    if (navegacion.classList.contains('mostrar')) {
        navegacion.classList.remove('mostrar');
        scroll.style = 'overflow: auto';
    } else {
        navegacion.classList.add('mostrar');
        scroll.style = 'overflow: hidden';
    }
}

function animationMenuLines() {
    const menuLines = document.querySelectorAll('.line');
    for (let i = 0; i < 3; i++) {
        menuLines[i].classList.toggle('mostrar');
    }
}

function logoActivity() {
    // const logo = document.querySelector('#logo');
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            console.log('Es visible');
            // logo.addEventListener('click', navegacionResponsive);
            // logo.addEventListener('click', animationMenuLines);
            const enlaces = document.querySelectorAll('.navegacion-principal a');

            enlaces.forEach(function (enlace) {
                enlace.addEventListener('click', () => {
                    navegacionResponsive();
                    animationMenuLines();
                })
            })

        } else {
            console.log('No es visible');

        }
    })
    observer.observe(document.querySelector('.mobile-menu'));
}

function mostrarTitulos() {
    const titulo = document.querySelector('#titulo');
    const subtitulo = document.querySelector('#subtitulo');
    const vacio = document.querySelector('.vacio')
    titulo.classList.add('mostrar');
    subtitulo.classList.add('mostrar');
    vacio.classList.add('mostrar');
}

function mostrarSlogan() {
    const slogan = document.querySelector('#slogan');
    slogan.classList.add('mostrar');
}

function mostrarMenuYBoton() {
    const logo = document.querySelector('#logo');
    const boton = document.querySelector('.boton-contacto-main');
    const mobileMenu = document.querySelector('.mobile-menu');
    logo.classList.add('mostrar');
    boton.classList.add('mostrar');
    mobileMenu.classList.add('mostrar');

    const item = document.querySelector('nav');
    let cuenta = 0;
    setInterval(() => {
        if (cuenta < 3) {
            item.children[cuenta].classList.add('mostrar');
            cuenta++;
        } else {
            clearInterval();
        }
    }, 300);
}

mostrarContenido = setTimeout(mostrarTitulos, 100);
mostrarContenido = setTimeout(mostrarSlogan, 300);
mostrarContenido = setTimeout(mostrarMenuYBoton, 2000);

particlesJS({
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": .5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})







