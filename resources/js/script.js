
/* sticy navigation */
$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction) {
        if(direction === "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
        {
          '60px'
        }
    }) 

    /* scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
      $('html, body').animate({scrollTop: $('.js--singUp-section').offset().top}, 1000)
    })

    $('.js--scroll-to-start').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })

     /* navigation scroll */
     $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    

    /* animation on scroll */
    $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn')
    },
    
    {
      offset:'50%'
    }
    );

    $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
    },
    
    {
      offset:'50%'
    }
    );

    $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn')
    },
    
    {
      offset:'50%'
    }
    );

    $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animate__animated animate__pulse')
    },
    
    {
      offset:'50%'
    }
    );

    $('.js--wp-4').mouseenter(function(){
      $('.js--wp-4').addClass('animate__animated animate__pulse');
    })

    $('.js--wp-4').mouseout(function(){
      $('.js--wp-4').removeClass('animate__animated animate__pulse');
    })

    $('.js--wp-5').mouseenter(function(){ 
      $('.js--wp-5').addClass('animate__animated animate__pulse');
    })

    $('.js--wp-5').mouseout(function(){
      $('.js--wp-5').removeClass('animate__animated animate__pulse');
    })

    $('.js--wp-6').mouseover(function(){
      $('.js--wp-6').addClass('animate__animated animate__pulse');
    })

    $('.js--wp-6').mouseout(function(){
      $('.js--wp-6').removeClass('animate__animated animate__pulse');
    })


      /* mobile nav */

      $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon')

        nav.slideToggle(200);

        if(icon[0].name == 'menu') {
          icon[0].name = 'close'
        }

        else if (icon[0].name == 'close') {
          icon[0].name = 'menu'
        }
      })

})