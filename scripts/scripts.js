$(document).ready(function() {
  $('.case').each(function(fadeInDiv){
    $(this).delay(fadeInDiv * 400).fadeIn(1000);
  });
})

$(document).ready(changeClass, changeFontSize);
$(window).on('resize', changeClass, changeFontSize);

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
  if($(window).width() <= 575) {
    $('.title').css('font-size', '1.25em');
  }else{
    $('.title').css('font-size', '1.626em');
  }
}
