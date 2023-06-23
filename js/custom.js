
$(document).ready(function(){
    $('.js .form-check-input').click(function(){
        $(this).toggleClass('active');    
        $(document).mousemove(function(e){
                if($('.js .form-check-input').hasClass('active')){
                let x = (window.innerWidth / 2 - e.clientX) / 10;
                let y = (window.innerHeight / 2 - e.clientY) / 10;
                let z = (window.innerHeight / 2 - e.clientY) / 10;
                console.log(y,-x/10);
                $('.document').css({
                    '-webkit-transform': 'rotateX(' + y + 'deg) rotateY(' + -x + 'deg) rotateZ(' + -z + 'deg) scale(0.7) ',
                        '-moz-transform': 'rotateX(' + y + 'deg) rotateY(' + -x + 'deg) rotateZ(' + -z + 'deg) scale(0.7) ',
                        '-ms-transform': 'rotateX(' + y + 'deg) rotateY(' + -x + 'deg) rotateZ(' + -z + 'deg) scale(0.7) ',
                        '-o-transform': 'rotateX(' + y + 'deg) rotateY(' + -x + 'deg) rotateZ(' + -z + 'deg) scale(0.7) ',
                        'transform': 'rotateX(' + y + 'deg) rotateY(' + -x + 'deg) rotateZ(' + -z + 'deg) scale(0.7) '
                })
                $('.layer').css('transform', 'translateZ(70px)')
                $('.half img').css('transform', 'translateZ(50px)')
                $('.rect > *').css('transform', 'translateZ(50px)')
            }
            else {
                $('.document, .layer, .half img').attr("style", "");
               
            }
            })
    })
    $('.hover').click(function(){
        $(this).toggleClass('active');
        if($('.hover').hasClass('active')){
            $('.document').addClass('hover-active')
            console.log(66);
        }
        else{
            $('.document').removeClass('hover-active')
        }
    })
})