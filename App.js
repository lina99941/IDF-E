$(document).ready( function() {
    let onl = false;
    $('.res-tit').addClass('trans');
    $('.res-con').addClass('rea');
    $('.obj-tit').addClass('trans');
    $('.obj-con').addClass('rea');
    $('.comp-tit').addClass('trans');
    $('.comp-con').addClass('rea');
    $('.deb-tit').addClass('trans');
    $('.deb-con').addClass('rea');
    $('.pla-con').addClass('rea');
    $('.lis-con').addClass('rea');
    $('.cond-tit').addClass('trans');
    $('.cond-con').addClass('rea');

    $('.res-tit').on('click', function() {
        console.log('3iw I m heeere');
        if (onl) {
            $('.res-tit').addClass('trans');
            $('.res-con').delay(500).show(0);
            setTimeout(function() {
                $('.res-con').addClass('rea');
            }, 500);
            
            
            onl = false;
        }
        else {
            $('.res-con').removeClass('rea');
            setTimeout(function() {
                $('.res-con').hide(0);
                $('.res-tit').removeClass('trans');
            }, 400);
            onl = true;
        }  
    })

    $('.obj-tit').on('click', function() {
        console.log('3iw I m heeere 3awtani');
        if (onl) {
            $('.obj-tit').addClass('trans');
            $('.obj-con').delay(500).show(0);
            setTimeout(function() {
                $('.obj-con').addClass('rea');
            }, 500);
            
            
            onl = false;
        }
        else {
            $('.obj-con').removeClass('rea');
            setTimeout(function() {
                $('.obj-con').hide(0);
                $('.obj-tit').removeClass('trans');
            }, 400);
            onl = true;
        }
        
    })

    $('.deb-tit').on('click', function() {
        console.log('3iw I m heeere');
        if (onl) {
            $('.deb-tit').addClass('trans');
            $('.deb-con').delay(500).show(0);
            setTimeout(function() {
                $('.deb-con').addClass('rea');
            }, 500);
            
            
            onl = false;
        }
        else {
            $('.deb-con').removeClass('rea');
            setTimeout(function() {
                $('.deb-con').hide(0);
                $('.deb-tit').removeClass('trans');
            }, 400);
            onl = true;
        }
        
    })


    $('.comp-tit').on('click', function() {
        console.log('3iw I m heeere');
        if (onl) {
            $('.comp-tit').addClass('trans');
            $('.comp-con').delay(500).show(0);
            setTimeout(function() {
                $('.comp-con').addClass('rea');
            }, 500);
            
            
            onl = false;
        }
        else {
            $('.comp-con').removeClass('rea');
            setTimeout(function() {
                $('.comp-con').hide(0);
                $('.comp-tit').removeClass('trans');
            }, 400);
            onl = true;
        }
        
    })

    $('.lis-tit').on('click', function() {
        $('.lis-con').slideToggle();
    });
    
    $('.cond-tit').on('click', function() {
        console.log('3iw I m heeere');
        if (onl) {
            $('.cond-tit').addClass('trans');
            $('.cond-con').delay(500).show(0);
            setTimeout(function() {
                $('.cond-con').addClass('rea');
            }, 500);
            
            
            onl = false;
        }
        else {
            $('.cond-con').removeClass('rea');
            setTimeout(function() {
                $('.cond-con').hide(0);
                $('.cond-tit').removeClass('trans');
            }, 400);
            onl = true;
        }  
    })

    $('.pla-tit').on('click', function() {
        $('.pla-con').slideToggle();
    });
    




    console.log("catch me if you can xD");
});
\