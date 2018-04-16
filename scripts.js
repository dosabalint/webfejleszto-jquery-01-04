$(function() {
  let $image = $('.image-wrapper img');

  $image.click(function() {
    
    // előző
    let $actualImage = $(this);
    if (!$actualImage.hasClass('scale-half')) {
      return;
    }

    // aktuális kép
    let $previousImage = $('.image-wrapper img:not(.scale-half)');

    // class variálás
    $previousImage.addClass('scale-half');
    $actualImage.removeClass('scale-half');
  });
});
