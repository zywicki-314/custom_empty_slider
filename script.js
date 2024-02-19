// 'use strict';
///////////////////////////////////


const slider = document.querySelectorAll('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots')

let currentSlide = 0;
const slidesNumber = slides.length;

const creatDots = function() {
    slides.forEach(function(s, index) {
        if(!(s.classList.contains("display-none"))) {
            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${index}"></button>`)
        }
    })
}

creatDots()

const activateCurrentDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide ="${slide}"]`).classList.add('dots__dot--active')
}

const moveToSlide = function(slide) {
    slides.forEach((s, index) => {s.style.transform = `translateX(${(index - slide) * 100}%)`});
}

const nextSlide = function(){
    if(currentSlide === (slidesNumber - 1)) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    moveToSlide(currentSlide);

   activateCurrentDot(currentSlide)
}

const previousSlide = function(){
    if(currentSlide === 0) {
        currentSlide = (slidesNumber - 1);
    } else {
        currentSlide--;
    }
    moveToSlide(currentSlide)
   activateCurrentDot(currentSlide)
}

moveToSlide(0);

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', previousSlide);

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
})

dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide;
        moveToSlide(slide)
        activateCurrentDot(slide)
    }
})