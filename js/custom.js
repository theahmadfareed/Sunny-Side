$(document).ready(function(){

    // AOS plugin    ===============;
    AOS.init();

    // scroll position   ==============;
    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();
    
        // back to top appearance   ===========;
        if(scrolling > 200){
          $('.back-to-top').fadeIn();
        }else{
          $('.back-to-top').fadeOut();
          
        }
        // navbar positioning    ==============;
        if(scrolling > 90){
          $('nav').addClass('nav-fix');
        }else{
          $('nav').removeClass('nav-fix');
        }
    
      })
    
       // back to top action   ===========;
       $('.back-to-top').on('click',function(){
         $('html,body').animate({
           scrollTop: '0px',
         }, 1500);
       })
})