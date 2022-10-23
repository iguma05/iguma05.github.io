const more = document.querySelector('.content__more');
const text = document.querySelector('.text');

more.addEventListener('click', ()=> {
    text.classList.toggle('open');
    more.classList.toggle('rotate');
    if(more.textContent !== "Свернуть") {
        more.textContent = "Свернуть";
    } else {
        more.textContent = "Читать далее";
    }
});

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    slidesPerView: 1.2,
});

const brands = document.querySelector('.brands__items');
const seeBrandsAll = document.querySelector('.brands__more');


seeBrandsAll.addEventListener('click', ()=> {
    brands.classList.toggle('open_brands');
    seeBrandsAll.classList.toggle('rotate');
    if (seeBrandsAll.textContent !== "Показать все") {
        seeBrandsAll.textContent = "Показать все";
    } else {
        seeBrandsAll.textContent ="Скрыть"
    }
});