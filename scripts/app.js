// Listen for ALL links at the top level of the document. For
// testing purposes, we're not going to worry about LOCAL vs.
// EXTERNAL links - we'll just demonstrate the feature.
$('a').click( function() { location.href = $( this ).attr( "href" ); return false; });

$(window).on('load', function(){
    loaded();
});

function loaded(){
  // $('#loader').addClass('hidden');
  $('#loader').fadeOut('slow')
}
