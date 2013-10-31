function goTo(id){
      $('html,body').animate({scrollTop: $("."+id).offset().top -36},'slow');
}

$(document).ready(function() {
    $(".slide a").click(function(e) {
        e.stopPropagation();
    });
    
    $(".first").click(function(){
      $('#clickToContinue').fadeTo(500, 0);
    });
});

$(function()
{
        $('.slide') .css({'height': (($(window).height()) -72)});
        $('table') .css({'height': (($(window).height()) -72)});

        
        $(window).bind('resize', function(){
            $('.slide') .css({'height': (($(window).height()) -72)});
            $('table') .css({'height': (($(window).height()) -72)});            
        });
});
      
$(function() {
      $('#clickToContinue').hide().fadeIn(7000);
});

$('body').click(function() {
   $('#clickToContinue').hide();
});
