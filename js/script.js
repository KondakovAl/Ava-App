let burger = document.querySelector('.burger');
let menuMobile = document.querySelector('.menu_mobile');


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuMobile.classList.toggle('active');
    document.body.classList.toggle('lock');
})