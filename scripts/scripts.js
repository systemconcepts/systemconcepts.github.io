$(document).ready(function() {
  $('.case').each(function(fadeInDiv){
    $(this).delay(fadeInDiv * 400).fadeIn(1000);
  });
})

$(document).ready(function(){
  changeClass();
  changeFontSize();
});
$(window).on('resize', function(){
  changeClass();
  changeFontSize();
});

// $(document).ready(changeFontSize);
// $(window).on('resize', changeFontSize);

function changeClass() {
  if($(window).width() < 768) {
    $('#mainBody').addClass('container-fluid');
    $('#mainBody').removeClass('container');
  }else{
    $('#mainBody').addClass('container');
    $('#mainBody').removeClass('container-fluid');
  }
}

function changeFontSize() {
  if($(window).width() < 576) {
    $('.title').css('font-size', '1.25em');
  }else{
    $('.title').css('font-size', '1.626em');
  }
}
