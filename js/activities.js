const container = document.getElementById('scrolable');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

function scrollContainer(distance) {
    container.scrollBy({ left: distance, behavior: 'smooth' });
}

function updateButtons() {
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    btnLeft.classList.toggle('hidden', scrollLeft <= 0);
    btnRight.classList.toggle('hidden', scrollLeft + clientWidth >= scrollWidth - 1);
}

// Atualiza ao rolar e ao carregar
container.addEventListener('scroll', updateButtons);
window.addEventListener('load', updateButtons);
window.addEventListener('resize', updateButtons);
