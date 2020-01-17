(function($){
  $(function(){
    var _window = $(window),
    _header = $('.site-header'),
    heroBottom;
 
_window.on('scroll',function(){
    heroBottom = $('.header').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');   
    }
    else{
        _header.removeClass('transform');   
    }
});
 
_window.trigger('scroll');
});  
})(jquery);
