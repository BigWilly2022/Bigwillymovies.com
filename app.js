$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
}) 


let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
$('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true, 
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true

})

$('#top-movies-slide').owlCarousel({
    items: 2,
    dots: false,
    loop: true, 
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        500: {
            items: 3
        },
        800: {
            items: 4
        },
        1200: {
            items: 5
        },
        1280: {
            items: 6       
        },
        1600: {
            items: 6       
        }
    }
})

$('.movies-slide').owlCarousel({
    items: 2,
    dots: false,
    nav: true, 
    navText: navText,
    margin: 15,
    responsive: {
        100: {
            items: 1
        },
        300: {
            items: 1
        },
        500: {
            items: 2
        },
        800: {
            items: 3
        },
        1200: {
            items: 4
        },
        1280: {
            items: 6
        },
        1600: {
            items: 6
        }
    }
})


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".toggle,.toggle-icon,.section-header,.text,.nav-wrapper,body,.main-color,.nav a,.fr,.social-item,.social-item:hover,.l,.btn-hover::before,.footer-menu a:hover,.section-header,.pricing-box.hightlight,.pricing-box,.nav-menu,a:hover"
);

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    });
    ball.classList.toggle("active")
});






//Custom Scroll Bar
window.onscroll = function() {mufunction()};

function mufunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById('scroll-bar').style.width = scrolled + '%';
}
 