const burgerIcon = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger-menu');

burgerIcon.addEventListener('click', burgerHandler);

function burgerHandler() {
    burgerMenu.classList.toggle('burger-menu--active');
    document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
}