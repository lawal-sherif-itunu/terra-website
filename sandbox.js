const nav = document.querySelector('i.nav-bar-icon');
const popup = document.querySelector('.background-dark');
const popupContent = document.querySelector('.left-nav-mobile');
const close = document.querySelector('.close-nav');

nav.addEventListener('click', e => {

    
    popup.style.display = 'block';
    popupContent.style.display = 'block';
    nav.style.display = 'none';
    close.style.display = 'block';
});

close.addEventListener('click', e => {

    
    popup.style.display = 'none';
    popupContent.style.display = 'none';
    nav.style.display = 'block';
    close.style.display = 'none';
});

popup.addEventListener('click', e => {

    
    popup.style.display = 'none';
    popupContent.style.display = 'none';
    nav.style.display = 'block';
    close.style.display = 'none';
});

const perks = document.querySelector('.perks');
const perksContent = document.querySelector('.perks-content');
const perksTwo = document.querySelector('button.perks-two');

perks.addEventListener('click', e => {
    perksContent.style.display = 'block';
    perksTwo.style.display = 'flex';
    perks.style.display = 'none';
});

perksTwo.addEventListener('click', e => {
    perksContent.style.display = 'none';
    perksTwo.style.display = 'none';
    perks.style.display = 'flex';
});

