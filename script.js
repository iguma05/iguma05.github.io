const more = document.querySelector('.content__more');
const text = document.querySelector('.text');

more.addEventListener('click', ()=> {
    text.classList.toggle('open');
});

new Swiper('.swiper');