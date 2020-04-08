$(document).ready(function(){
$('.sidebar li').click(function(e) {

    $('.sidebar li').removeClass('active');
  
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
  });
})