$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.hero').addclass("sticky");

        }else{
            $('.hero').removeclass("sticky");
        }
        if(this.scrollY > 100){
            $('.scroll-up-btn').addclass("show");
        }else{
            $('.scroll-up-btn').removeclass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop : 0});
    });
})

.$('menu-btn').click(function(){
    $('.hero .menu').toggle("active");
    $('.menu-btn i').toggle("active");

})