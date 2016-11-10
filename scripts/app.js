// $(window).on('load', function(){
//     $("div#loader").fadeOut();
//
// });

$(document).ready(function(){
    loaded();
});

function loaded(){
  $('#loader').addClass('hidden');
}

// $('#step-by-step').click(function(){
//   showPop();
// })
//
// $('.close-btn').click(function(){
//   hidePop();
// })
//
// function showPop(){
//   $('.pop-over').animate({top: '0'}, 1000 , "easeOutQuint");
//   $('.pop-over').toggleClass('hidden');
// }
//
// function hidePop(){
//   $('.pop-over').animate({top: '100vh'}, 1000 , "easeInQuint", function(){
//       $('.pop-over').toggleClass('hidden')
//   });
// }
