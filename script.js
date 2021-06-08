$(document).ready(function(){
    // Navbar to show cross icon
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',throttle(scrollHighlight, 200));

});

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function scrollHighlight(){
    // on reload or scroll if window size is less
    //  and navbar is activate then simply remove it
    $('#menu-bar').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    // this is to show active navbar sign on the top
    $('section').each(function(){

        let top = $(window).scrollTop();
        let height = $(this).height();
        let id = $(this).attr('id');
        let offset = $(this).offset().top - 200;

        if(top > offset && top < offset + height){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }

    });
}
