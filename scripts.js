$(function(){

  let $image = $('.image-wrapper img');

  $image.click(function(){

    // előzőről class-t elvenni
    let $previousImage = $('.image-wrapper img:not(.scale-half)');
    $previousImage.toggleClass('scale-half');
    
    // újhoz classt hozzárakni
    let $actualImage = $(this);
    $actualImage.toggleClass('scale-half');
  })
})