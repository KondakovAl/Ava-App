// BURGER //

let burger = document.querySelector('.burger');
let menuMobile = document.querySelector('.menu__mobile');


burger.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    menuMobile.classList.toggle('_active');
  })


//FAQ//

    document.querySelectorAll('.faq__question').forEach((item) =>
    item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('faq__list-item--active')) {
        parent.classList.remove('faq__list-item--active');
      } else {
        document.querySelectorAll('.faq__list-item').forEach((child) =>
        child.classList.remove('faq__list-item--active'))
        parent.classList.add('faq__list-item--active');
      }
    })
    )

// SCROLL BUTTON //

    let upButton = document.querySelector('.up-button');

    window.onscroll = function () {
        if (window.pageYOffset > 400) {
          upButton.classList.add('--shown');
        } else {
          upButton.classList.remove('--shown');
        }
      
      };

      upButton.onclick = function () {
        window.scrollTo(0, 0);
      };
  
  //SLIDER//
  
const swiper = new Swiper('.swiper', {
    
    loop: true,
  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    grabCursor: true,

    hashNavigation: {
        watchState: true,
    },

    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    slideToClickedSlide: true,

    slidesPerView: 'auto',

    spaceBetween: 20,

    // breakpoints: {
      
    //   786: {
    //     spaceBetween: 20
    //   }
  
    // },
    
    freeMode: true,

    autoplay: {
      delay: 2000,
        // stopOnLastSlide: true,
        disableOnInteraction: false,
    },
    speed: 800,
  });
  
  //ANIMATION//

  AOS.init({
    offset: 150,
    once: true,
  });
  