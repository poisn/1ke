

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
        new WOW().init();
    };

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',//你的每一个屏的局中方式，水平为horizontal，垂直为vertical,默认为水平为horizontal
        loop: true,//是否循环，就是无缝滚动
        autoplay: 2000,//自动轮转的时间间隔
        speed:500,//你手动拉的时间间隔
        autoplayDisableOnInteraction: false,//你操作之后轮转图还能否继续自动播放
        pagination: '.swiper-pagination',//这个属性是用来定义轮转图下面的小圆点的，类名可以随意，
        //但是你如果换了别的类名，你同时也需要来修改样式
        paginationClickable:true,//是否允许小圆点控制翻页
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
        //前进和后退的按钮
    });

