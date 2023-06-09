//スティッキーヘッダー
$(function(){
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed';

      $win.on('load scroll',function(){
          var value = $(this).scrollTop();
          if($win.width() > 768){
              if( value > fvHeight){
                  $header.addClass(fixedClass);    
              }else{
                  $header.removeClass(fixedClass);
                }
          }
      } ); 
  });
  
//スライダー
$('.slider').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
          fade: true, 
          cssEase:'linear',
          responsive: [
                {
                  breakpoint: 768,
                  settings: "unslick",
                },
              ],
            });
          $(window).on("resize orientationchange", function () {
            $(".slider").slick("resize");
          });