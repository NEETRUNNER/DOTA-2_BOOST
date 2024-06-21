// Табы
const boost = document.querySelectorAll('#boost');
const tabsBtns = document.querySelectorAll('.catalog-tabs__li');
const calibration = document.querySelector('#calibration')
const duoBoost = document.querySelector('#duoBoost');

tabsBtns[0].addEventListener('click', () => {
    boost.forEach(button => {
        button.classList.remove('hidden');
    })
    calibration.classList.add('hidden');
    duoBoost.classList.add('hidden')
});

tabsBtns[1].addEventListener('click', () => {
    boost.forEach(button => {
        button.classList.add('hidden');
    })
    calibration.classList.remove('hidden');
    duoBoost.classList.add('hidden')
});

tabsBtns[2].addEventListener('click', () => {
    boost.forEach(button => {
        button.classList.add('hidden');
    })
    duoBoost.classList.remove('hidden');
    calibration.classList.add('hidden');
});

// Модальные окна
const boostBtns = document.querySelectorAll('.catalog-item__btn');
console.log(boostBtns)
const boostModals = document.querySelectorAll('[data-boost]')
const closeModals = document.querySelectorAll('[data-close]')
const mainBtn = document.querySelector('.main-block__btn');
const mainTwo = document.querySelector('#main_button');

// Закрытие на кнопку
function closeModalFunc() {
    closeModals.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            boostModals[index].style.display = 'none';
            document.body.style.overflow = 'visible';
        });
    });
}

// При клике откроется нужное окно
boostBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        boostModals[index].style.display = 'block';
        document.body.style.overflow = 'hidden';
        closeModalFunc();
    });
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    boostModals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        }
    });
});

// При нажатии на кнопку мы перейдем к буст странице
mainBtn.addEventListener('click', () => {
    const catalog = document.querySelector('.catalog');
    catalog.scrollIntoView({ behavior: 'smooth' });
});

mainTwo.addEventListener('click', () => {
    const carousel = document.querySelector('.carousel');
    carousel.scrollIntoView({ behavior: 'smooth' });
});


// Слайдер
const swiperSlider = document.querySelector('.swiper');
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    
    // If we need pagination
    pagination: {
      clickable: true,
      bulletActiveClass: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
    },

    effect: 'coverflow',

    cubeEffect: {
      shadow: true,
    },
  });


// Скрыть/Открыть блок
const imgArrow = document.querySelectorAll('.about-block__img');
const hiddenBlock = document.querySelectorAll('.about-block__hidden')

imgArrow.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
        hiddenBlock[index].classList.toggle('hidden');
    });
});
