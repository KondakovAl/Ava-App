let burger = document.querySelector('.burger');
let menuMobile = document.querySelector('.menu_mobile');


burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menuMobile.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})