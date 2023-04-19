const ANIMATE_EVERY = 2;

$(document).ready(function(){

  addAnimateToSomePhotoMarkers();

  /* Animate Stars */
  const markers = document.querySelectorAll('.photo-marker-animated');
  markers.forEach(marker => {
  // Generate random animation properties
  const duration = Math.floor(Math.random() * 1800) + 1800; // Random duration between 500ms and 1500ms
  const delay = Math.floor(Math.random() * 1000); // Random delay between 0ms and 1000ms
  // Apply animation properties to element
  marker.style.animationDuration = duration + 'ms';
  marker.style.animationDelay = delay + 'ms';
  });

  /* Animate Yellow Halos */
  const halos = document.querySelectorAll('.dot-halo');
  halos.forEach(marker => {
  // Generate random animation properties
  const duration = Math.floor(Math.random() * 6000) + 7000; // Random duration between 500ms and 1500ms
  const delay = Math.floor(Math.random() * 2000); // Random delay between 0ms and 1000ms
  // Apply animation properties to element
  marker.style.animationDuration = duration + 'ms';
  marker.style.animationDelay = delay + 'ms';
  });
});


function addAnimateToSomePhotoMarkers(){
  $('.photo-marker').each(function(index) {
    //$(this).css('transform', 'scale(100%)');
  if(index%ANIMATE_EVERY==0){
    $(this).addClass( "photo-marker-animated" );
  }
  });
  $('.video-marker').each(function(index) {
    //$(this).css('transform', 'scale(100%)');
  //if(index%ANIMATE_EVERY==0){
    $(this).addClass( "photo-marker-animated" );
  //}
  });
}