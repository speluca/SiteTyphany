const track = document.querySelector('.carousel-track');
let currentPosition = 0;

function moveCarousel() {
    currentPosition -= 1; 
    track.style.transform = `translateX(${currentPosition}px)`;

    if (currentPosition <= -track.offsetWidth) {
        currentPosition = 0;
    }
}

setInterval(moveCarousel, 10);

const carousel = document.querySelector('.feedback-carousel');

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Velocidade de rolagem ajustável
    carousel.scrollLeft = scrollLeft - walk;
});


document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');

        input.addEventListener('focus', function() {
            this.setAttribute('placeholder', '');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.setAttribute('placeholder', placeholder);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuSanduiche = document.querySelector('.menu-sanduiche');
    const menuLinks = document.querySelector('.menu-links');

    menuSanduiche.addEventListener('click', function () {
        menuLinks.classList.toggle('aberto');
    });
});









