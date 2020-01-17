
  $(function(){
    var effect_pos = -100;//画面下からどの位置でフェードさせるか
    var effect_move = 200;//どのくらい要素を動かすか
    var effect_time = 1000;//エフェクトの時間(ms) 1秒=1000

    //フェードする前のCSS
    $('.about-left').css({
      opacity:0,
      transform:'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
    });
    $('.about-right').css({
      opacity:0,
      transform:'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
    });

    //スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      effect_pos = scroll_btm - effect_pos;
      
      //effect_posがthis_posを超えたとき、エフェクトが発動
      $('.about-left').each(function(){
        var this_pos = $(this).offset().top;
        if(effect_pos> this_pos){
          $(this).css({
            opacity:1,
            transform:'translateY(0)'
          });
          $('.about-right').each(function(i){
            $(this).delay(200 + i*400).queue(function(){
              $(this).css({
                opacity:1,
                transform:'translateY(0)'
              }).dequeue();
            });
          });
        }
      });
    });
  });

  
  
