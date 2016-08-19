/**
 * Created by christy on 16/8/19.
 */
$(window).scroll(function () {
    var $animated = $('.nav');
    if ($animated.length && $animated.offset().top > 700) {
        $animated.addClass('.navbar-fixed-top');
    } else {
        $animated.removeClass('.navbar-fixed-top');/*截止到这里是用来给nav在滑动的时候判断出现和不出现的条件的*/
    }
});


$(document).ready(function () {
    $(window).scroll(function () {

        $(".img-con").each(function () {
            var bottom_of_object=$(this).offset().top+$(this).outerHeight();
            var bottom_of_window=$(window).height()+$(window).scrollTop();
            if(bottom_of_window>=bottom_of_object){
                $(this).animate({"opacity":"1"},1000)
            }

        })
    })
})


$(document).ready(function () {
    $(window).scroll(function () {
        $(".help").each(function () {
            var bottom_of_object=$(this).offset().top+$(this).outerHeight();
            var bottom_of_window=$(window).height()+$(window).scrollTop();
            if(bottom_of_window>=bottom_of_object){
                $(this).animate({"opacity":"1"},1000)
            }

        })
    })
})
$(document).ready(function () {
    $(window).scroll(function () {
        $(".img-con3").each(function () {
            var bottom_of_object=$(this).offset().top+$(this).outerHeight();
            var bottom_of_window=$(window).height()+$(window).scrollTop();
            if(bottom_of_window>=bottom_of_object){
                $(this).animate({"opacity":"1"},1000)
            }

        })
    })
})