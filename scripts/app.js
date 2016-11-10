$('#step-by-step').click(function(){
  showPop();
})

$('.close-btn').click(function(){
  hidePop();
})

function showPop(){
  $('.pop-over').animate({top: '0'}, 1000 , "easeOutQuint");
  $('.pop-over').toggleClass('hidden');
}

function hidePop(){
  $('.pop-over').animate({top: '100vh'}, 1000 , "easeInQuint", function(){
      $('.pop-over').toggleClass('hidden')
  });
}


// external js: flickity.pkgd.js

// var $carousel = $('.carousel').flickity({
//   imagesLoaded: true,
//   percentPosition: false,
// });
//
// var $imgs = $carousel.find('.carousel-cell img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';
// // get Flickity instance
// var flkty = $carousel.data('flickity');
//
// $carousel.on( 'scroll.flickity', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
