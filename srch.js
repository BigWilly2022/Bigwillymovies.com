// javascript code

function search_movies() {
    let input = document.getElementById('searchbar').value
    input= input.toLowerCase ();
    let x = document.getElementsByClassName('movies');

    for (i = 0; i < x.length; i++) {
        if ( !x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
} 

$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })
}) 

$('.new-content'), ({
    items: 3,
    dots: false,
    nav: true, 
    navText: navText,
    margin: 15,
    responsive: {
        300: {
            items: 1
        },
        500: {
            items: 3
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})

$('.swiper-slide'), ({
    items: 3,
    dots: false,
    nav: true, 
    navText: navText,
    margin: 15,
    responsive: {
        300: {
            items: 1
        },
        500: {
            items: 3
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".toggle,.toggle-icon,.section-header,.text,.nav-wrapper,body,.main-color,.nav a,.fr,.social-item,.social-item:hover,a:hover,.section-header,.pricing-box.hightlight,.pricing-box,.nav-menu,a:hover"
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