// Header top offer alert
let offerClose = document.querySelector('.offer-close');
let headerTop = document.querySelector('.header-top');

offerClose.addEventListener('click',()=>{

    headerTop.style.display = 'none';

})
// Toggle menu
 let toggleMenu = document.querySelector('.header-icons .toggle-menu');
 let menuClose = document.querySelector('.header-nav .menu-close');
 let menu = document.querySelector('.header-nav');

 toggleMenu.addEventListener('click',()=>{
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('active');
 });
 menuClose.addEventListener('click',()=>{
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('active');
 });

//  all department / category menu
let catToggleMenuToggle = document.querySelector('.category-menu .toggle');

let catToggleMenu = document.querySelector('.category-nav');

let catToggleMenuClose = document.querySelector('.category-nav .menu-close');

catToggleMenuToggle.addEventListener('click',()=>{
  catToggleMenu.classList.toggle('active');
});

catToggleMenuClose.addEventListener('click',()=>{
  catToggleMenu.classList.toggle('active');
});

// Login form popup
let loginFormPopup = document.querySelector('.login-form-popup');
let loginFormClose = document.querySelector('.login-close');
let loginForm =document.querySelector('.login-container')
;
loginFormPopup.addEventListener('click',()=>{
  loginForm.classList.toggle('active');
});
loginFormClose.addEventListener('click',()=>{
  loginForm.classList.toggle('active');
});

//  JQUERY FUNCTIONS

 $(document).ready(function(){

  // home banner
  

$('.hero-slider-container').slick({
  rows: 1,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  /*vertical: true,*/
  customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '0' + (i + 1);
  },
});

   
$('.cat-banner-sec .container').slick({
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 6,
   slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
     {
       breakpoint: 900,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 700,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
 });


             

   // Scroll to top
   $(window).scroll(function(){
      if( $(this).scrollTop() > 250 ){
           $('#scroll-to-top').fadeIn();
       }else{
          $('#scroll-to-top').fadeOut();
      }
   });

   $('#scroll-to-top').click(function(){      
          $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
});