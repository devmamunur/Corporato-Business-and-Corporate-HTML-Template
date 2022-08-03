
(function($) {
    "use strict"


    $('.nightmode').on('click', function() {
        $('body').addClass('night');
        $('.line2').removeClass('line2_left');
        $('.line2').addClass('line2_right');
    });
    $('.daymode').on('click', function() {
        $('body').removeClass('night');
        $('.line2').removeClass('line2_right');
        $('.line2').addClass('line2_left');
    });

    
    //spainer box
    $('.spainer_box').on('click', function(event) {
        event.preventDefault();
        if($(this).hasClass('inOut')){
            $('.pannel_box').stop().animate({left:'-200px'}, 500);
        } else {
            $('.pannel_box').stop().animate({left:'0px'}, 500);
        }
        $(this).toggleClass('inOut');
        return false;
    });

    // color changer
    var bClass =  $('body')
    $('.color1').on('click', function() {
        bClass.addClass('c1').removeClass('c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color2').on('click', function() {
        bClass.addClass('c2').removeClass('c1 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color3').on('click', function() {
        bClass.addClass('c3').removeClass('c1 c2 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color4').on('click', function() {
        bClass.addClass('c4').removeClass('c1 c2 c3 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color5').on('click', function() {
        bClass.addClass('c5').removeClass('c1 c2 c3 c4 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color6').on('click', function() {
        bClass.addClass('c6').removeClass('c1 c2 c3 c4 c5 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color7').on('click', function() {
        bClass.addClass('c7').removeClass('c1 c2 c3 c4 c5 c6 c8 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color8').on('click', function() {
        bClass.addClass('c8').removeClass('c1 c2 c3 c4 c5 c6 c7 c9 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color9').on('click', function() {
        bClass.addClass('c9').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c10 c11 c12 c13 c14 c15 c16');
    });
    $('.color10').on('click', function() {
        bClass.addClass('c10').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c11 c12 c13 c14 c15 c16');
    });
    $('.color11').on('click', function() {
        bClass.addClass('c11').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c12 c13 c14 c15 c16');
    });
    $('.color12').on('click', function() {
        bClass.addClass('c12').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c13 c14 c15 c16');
    });
    $('.color13').on('click', function() {
        bClass.addClass('c13').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c14 c15 c16');
    });
    $('.color14').on('click', function() {
        bClass.addClass('c14').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c15 c16');
    });
    $('.color15').on('click', function() {
        bClass.addClass('c15').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c16');
    });
    $('.color16').on('click', function() {
        bClass.addClass('c16').removeClass('c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15');
    });

})(jQuery);