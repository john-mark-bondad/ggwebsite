// This script is for services section when scrolling the image, the text will change

$(window).scroll(function(){
          let $window = $(window),
              $body = $('body'),   
              $section = $('.services');
          let scroll = $window.scrollTop() + ($window.height() / 3);
          $section.each(function(){ 
            if($(this).position().top <= scroll && $(this).position().top + $(this).height() > scroll){
              $body.removeClass(function (index, css){
                return (css.match (/(^|\s)color-\s+/g) || [].join(' '));
              });
              $('.services').removeClass('active');
              $(this).addClass('active');
            }
          });
        }).scroll();