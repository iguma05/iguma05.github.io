const more = document.querySelector('.content__more');
const text = document.querySelector('.text');

more.addEventListener('click', ()=> {


    if(more.textContent !== 'Свернуть') {
        more.textContent = "Свернуть";
        more.classList.add('rotate');
        // text.classList.add('open');
        text.style.maxHeight = '260px';

    } else {
        more.textContent = "Читать далее";
        more.classList.remove('rotate');
        // text.classList.remove('open');
        text.style.maxHeight = '90px';
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

    if ( seeBrandsAll.textContent !== "Свернуть") {
        brands.style.maxHeight = '356px';
        seeBrandsAll.textContent = "Свернуть"
        seeBrandsAll.classList.add('rotate');
    } else {
        seeBrandsAll.textContent = "Показать все";
        brands.style.maxHeight = '180px';
        seeBrandsAll.classList.remove('rotate');
    }    
});