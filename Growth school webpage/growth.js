const btn=document.getElementById("btn")
const link=document.getElementsByClassName('navbar')[0]
btn.addEventListener('click',()=>{
link.classList.toggle('active');
});

/* slider */
let slidepos=0;
const sliders=document.querySelectorAll('.slide-item')
const totalslider=sliders.length;
console.log(totalslider);
const leftbtn=document.querySelector('.leftbtn');
const rightbtn=document.querySelector('.rightbtn');

leftbtn.addEventListener('click',function(){
  prevslide();  
})

rightbtn.addEventListener('click',function() {
  nextslide();
})

function updatepos(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
    
  });
  sliders[slidepos].classList.add('active');
}

function prevslide() {
  if (slidepos==0){
    slidepos=totalslider-1;
  }else{
  slidepos--;
  }
  updatepos();

}
function nextslide() {
  if (slidepos==totalslider-1){
    slidepos=0
  }else{
  slidepos++;
  }
  updatepos();
}



