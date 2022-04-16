let burger = document.querySelector('.burger');
let menuMobile = document.querySelector('.menu_mobile');


burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menuMobile.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})

//faq
// let plus = document.querySelectorAll('.faq__icon').forEach(item) =>
//     item.addEventListener('click', () => {
//         if (parent.classList.contains(faq__answer-container)
//     }

let plus = document.querySelector('.faq__icon')
let answer = document.querySelector('.faq__answer-container');

plus.addEventListener('click', () => {
    plus.classList.toggle('_open');
    answer.classList.toggle('_open');
})