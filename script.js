const more = document.querySelector('.content__more');
// const pseudo = window.getComputedStyle(document.querySelector('.content__more'), ':before');
const text = document.querySelector('.text');

more.addEventListener('click', ()=> {
    text.classList.toggle('open');
    more.classList.toggle('rotate');
    if(text.classList != 'text') {        
        more.innerHTML="";
        more.innerHTML+="Свернуть";
    } else {
        more.innerHTML="";
        more.innerHTML+="Читать далее";
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
    seeBrandsAll.classList.toggle('rotate');
    if ( brands.classList != 'brands__items') {            
        seeBrandsAll.innerHTML="";
        seeBrandsAll.innerHTML+="Скрыть";
    } else {
        seeBrandsAll.innerHTML="";
        seeBrandsAll.innerHTML+="Показать все";
    }
    
});