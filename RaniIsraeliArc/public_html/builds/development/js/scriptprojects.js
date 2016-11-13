//$(function () {
//    $('.carousel').carousel({
//        pause: true,
//        interval: false
//    });
//
//
//
//    $('.carousel .item').each(function () {
//
//        var next = $(this).next();
//
//        if (!next.length) {
//            next = $(this).siblings(':first');
//
//        }
//        next.children(':first-child').clone().appendTo($(this));
//
//        if (next.next().length > 0) {
//            next.next().children(':first-child').clone().appendTo($(this));
//        } else {
//            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//
//        }
//
//    });
//
//    $('.carousel .item').each(function () {
//        $(this).children(':first-child').addClass('left-side');
//        $(this).children(':first-child').addClass('col-lg-4 col-xs-0 col-md-4 col-sm-0');
//
//        $(this).children(':last-child').addClass('right-side');
//        $(this).children(':last-child').addClass('col-lg-4 col-xs-0 col-md-4 col-sm-0');
//
//        $(this).children(':nth-child(2n)').addClass('middle');
//        $(this).children(':nth-child(2n)').addClass('col-lg-4 col-xs-12 col-md-4 col-sm-12');
//
//        console.log($(this).children(':nth-child(2n)'));
//        console.log($(this).children(':last-child'));
//
//
//    });
//
//});
