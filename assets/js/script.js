$("document").ready(function(){
    // Toggle Menu
    $('.menu-btn').click(function(){
        $(".header-center .primary-menu").slideToggle();
        return false;
    })

    //Sticky Header 
    $(window).scroll(function(){
        if ($(document).scrollTop () < 1){
            $(".header-area").removeClass("fixed");
            $(".header-area").removeClass("active-bg");
        }
        else if ($(document).scrollTop () > 300){
            $(".header-area").removeClass("fixed");
            $(".header-area").addClass("active-bg");
        }
        else{
            $(".header-area").addClass("fixed");
        }
    });

    // Owl Carousel
    $('.carosuel-inner').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:10000,
        dots:false,
        navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>']
       
    })
    // testimonials 
    $('.testi-items').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        navText:['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    // Wow Js
    new WOW().init();
    
    // Magnific Js
    $('.thumbnail').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        gallery:{
            enabled:true, 
        },
        zoom:{
            enabled:true,
            duration: 300,
            easing: 'ease-in-out',
        }
        
      });


});