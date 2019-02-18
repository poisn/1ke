

    var suo = $('#suo'); 
    var hidden = $('#hidden');
    var ye = $('#ye');
    var icons = $('#icons');
    var ss = true;
    var aa = true;
    var bb = true;
    var cc = true;
    var lie = $(".lie span");
    var body = $('body');
    var header = $('header');
    var primary = $('.cd-primary-nav');
    var visible = $('.visible');
    var cd = $('.cd-search-trigger');
    var Da = $('.fang');
    var searchkeyword = $('.searchkeyword');

    

    lie.click(function(){
        if(ss){
            ss = false;
            primary.css('display','block');
            visible.css('display','block');
            lie.removeClass('s-gang');
            lie.addClass('x_hao');
            body.css({'top':'0','left':'-70%','overflow':'hidden'});
            header.css({'top':'0','left':'-70%'});
        }else{
            ss = true;
            primary.css('display','none');
            visible.css('display','none');
            lie.removeClass('x_hao');
            lie.addClass('s-gang');
            body.css({'top':'0','left':'0'});
            header.css({'top':'0','left':'0'});
        }
    });
    cd.click(function(){
       if(aa){
           aa=false;
           Da.removeClass('quan');
           Da.addClass('x_x');
           searchkeyword.css('display','block');
           visible.css('display','block');
       }else{
           aa=true;
           Da.removeClass('x_x');
           Da.addClass('quan');
           searchkeyword.css('display','none');
           visible.css('display','none');
       }
    });
 

        suo.click(function(){
            if(bb){
                show(hidden);
                suo.removeClass('xia-tou');
                suo.addClass('xxx_hao');
                bb = false;
            }else{
                suo.addClass('xia-tou');
                suo.removeClass('xxx_hao');
                hide(hidden);
                bb = true;
            }
        });
        ye.click(function(){
            if(cc){
                show(icons);
                ye.removeClass('xia-tou');
                ye.addClass('xxx_hao');
                cc = false;
            }else{
                ye.addClass('xia-tou');
                ye.removeClass('xxx_hao');
                hide(icons);
                cc = true;
            }
        });

    function show(box){
        box.removeClass("fadeOut");
        box.addClass("animated fadeIn");
        box.css('display','block');
    }
    function hide(box) {
        box.removeClass("fadeIn");
        box.addClass("animated fadeOut");
        setTimeout(function () {
            box.css('display','none');
        }, 1000);
    }
   












