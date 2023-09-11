$(document).ready(function(){
    
      
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
  

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
// // Date and time
// const currentDate = new Date();
// const milliseconds = currentDate.getMilliseconds();


// // Display the date and time in millisecond
// document.querySelector(".display-date").innerHTML = currentDate.toDateString();
// document.querySelector(".display-time").innerHTML = milliseconds.toLocaleTimeString();

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "HNGx Frontend Developer intern", "HNGx Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["HNGx Frontend Developer intern", "HNGx Backend Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const dateTime = () => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const dateElem = document.querySelector('[data-testid="currentDayOfTheWeek"]')
	const timeElem = document.querySelector('[data-testid="currentUTCTime"]')
	const setValue = (elem, val) => {	elem.innerHTML = val }
	setValue(dateElem, days[new Date().getUTCDay()])
	window.setInterval(()=> {
		setValue(dateElem, days[new Date().getUTCDay()])
	}, 60000)
	const timer = () => {
		window.setInterval(() => {
			setValue(timeElem, Date.now())
			}, 100)
 	}
	timer()
}
window.addEventListener('DOMContentLoaded', (event) => { dateTime() });