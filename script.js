const more = document.querySelector('.content__more');
const text = document.querySelector('.text');

more.addEventListener('click', ()=> {
    text.classList.toggle('open');
    if(text.classList != 'text') {
        more.innerHTML="";
        more.innerHTML+=`<span class="material-symbols-outlined">
        keyboard_double_arrow_up
        </span>Свернуть`;
    } else {
        more.innerHTML="";
        more.innerHTML+=`<span class="material-symbols-outlined">
        keyboard_double_arrow_down
        </span>Читать далее`;
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
    brands.classList.toggle('open'); 
    if ( brands.classList != 'brands__items') {            
        seeBrandsAll.innerHTML="";
        seeBrandsAll.innerHTML+=`<span class="material-symbols-outlined">
        keyboard_double_arrow_up
        </span>Скрыть`;
    } else {
        seeBrandsAll.innerHTML="";
        seeBrandsAll.innerHTML+=`<span class="material-symbols-outlined">
        keyboard_double_arrow_down
        </span>Показать все`;
    }
    
});