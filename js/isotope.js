$('.pf-items').isotope({
    itemSelector: '.pf-item',
    layoutMode: 'fitRows'
});
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.pf-items').isotope({
        filter:selector
    });
    return false;
});

