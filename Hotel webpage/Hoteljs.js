const btn=document.getElementsByClassName('btn')[0];
const navbar=document.getElementsByClassName('nav-link')[0];
btn.addEventListener('click',()=>{
navbar.classList.toggle('active');
});

