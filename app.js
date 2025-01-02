let menu=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
// -----swipper----
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   ---------counteranimation--
function animateValue(element,start,end,duration){
    let current=start;
    const range=end-start;
    const increment=end>start?1:-1;
    const stepTime=Math.abs(Math.floor(duration/range));

    const timer = setInterval(()=> {
         current+=increment;
         element.textContent=current;
         if(current===end){
            clearInterval(timer);
         }

        },stepTime)}

function startcounter(){
    const counterElements=document.querySelectorAll('.counter-value');
    counterElements.forEach((element)=>{
        const target=parseInt(element.getAttribute('data-target'));
        animateValue(element,0,target,1500) 
    });
}
window.addEventListener('scroll',()=>{
    const counterSection=document.querySelector('.flex-counter');
    const counterSectionTop=counterSection.getBoundingClientRect().top;
    const windowHeight=window.innerHeight;
    if(counterSectionTop<windowHeight){
        startcounter();
        window.removeEventListener('scroll',startcounter)
    }
})
// -----smoothscroll----

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// activelink
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top<offset+height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');        
      });
      };
  });
};



