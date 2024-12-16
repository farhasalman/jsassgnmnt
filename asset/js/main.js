const container = document.querySelector('.container');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');
const iconclose= document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=> {
    container.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    container.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    container.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});