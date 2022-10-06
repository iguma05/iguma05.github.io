const more = document.querySelector('.content__more');
let text = document.querySelector('.text');
console.log(text);

more.addEventListener('click', ()=> {
    text.classList.toggle('open');
});