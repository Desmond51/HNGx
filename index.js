$(document).ready(function(){
    //   // Current date
    //   let today= new Date();
    //   let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    //   document.getElementById("current-date").innerHTML = date;
    //   // current time 
    //   let time = today.getHours() + ':' + today.getMinutes()+ ':' + today.getSeconds() +':' + today.getMilliseconds();
    //   document.getElementById("current-time").innerHTML = time
    let today = new Date();
    let day = today.getDay();
    let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // document.getElementById(".day").innerHTML = "Today is :" + dayList[day] + ".";

    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds()
    let milliseconds = today.getMilliseconds();

    let prepand = (hour >= 12) ? "PM" : "AM";
    hour = (hour >=12) ? hour - 12 : hour;

    if(hour ===0 && prepand === "PM"){
        if(minute == minute===0 && seconds === 0){
            hour= 12;
            prepand= "Noon";
        }
        else{
            hour =12;
            prepand = "PM";
        }
    }
    if(hour ===0 && prepand === "AM"){
        if(minute ===0 && seconds === 0){
            hour= 12;
            prepand= "Midnight";
        }
        else{
            hour =12;
            prepand = "AM";
        }
    }
    document.getElementById(".time").innerHTML = "Current time is:" + ':' + hour + prepand + ':' + minute +':' + seconds;
// console.log("Current time is :" + hour + prepand + ":" + minute + ":" + seconds)
      
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