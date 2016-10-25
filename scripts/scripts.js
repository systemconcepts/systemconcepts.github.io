$(window).on('resize', function() {
  if($(window).width() < 768) {
    $('#mainBody').addClass('container-fluid');
    $('#mainBody').removeClass('container');
  }else{
    $('#mainBody').addClass('container');
    $('#mainBody').removeClass('container-fluid');
  }
})

$(window).ready(function() {
  if($(window).width() < 768) {
    $('#mainBody').addClass('container-fluid');
    $('#mainBody').removeClass('container');
  }else{
    $('#mainBody').addClass('container');
    $('#mainBody').removeClass('container-fluid');
  }
})

$(document).ready(function() {
  $('.case').each(function(fadeInDiv){
    $(this).delay(fadeInDiv * 400).fadeIn(1000);
  });
})


// $(document).ready(function() {
//    $('.word').each(function(fadeInDiv){
//      $(this).delay(fadeInDiv * 200).fadeIn(200);
//    });
// });
