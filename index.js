document.addEventListener('DOMContentLoaded', function () {

  // var endorsement_carousel_heading_text_h2 = $('.endorsements-carousel-headings .carousel-heading-text h2');
  // var endorsement_carousel_heading_text_h2_idx = 0;

  /*
  $('.endorsements-carousel .carousel-cell .carousel-image.video').magnificPopup({
      type: 'iframe',
      iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                      '<div class="mfp-close"></div>'+
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>'
      },
      callbacks: {
        markupParse: function(template, values, item) {
      //    values.title = item.el.attr('title');
        }
      }
  });
  */

  function showNextEndorsement(direction) {
    //console.log(endorsement_carousel_heading_text_h2[endorsement_carousel_heading_text_h2_idx]);
    /*
    endorsement_carousel_heading_text_h2.eq(endorsement_carousel_heading_text_h2_idx).fadeOut(500);
    if ( direction == 'left' ) {
      --endorsement_carousel_heading_text_h2_idx;
      console.log(endorsement_carousel_heading_text_h2_idx);
    }
    else if ( direction == 'right' )
      ++endorsement_carousel_heading_text_h2_idx;
    else 
      endorsement_carousel_heading_text_h2_idx = 0;

    if ( endorsement_carousel_heading_text_h2_idx < 0 ) 
      endorsement_carousel_heading_text_h2_idx = 7;
    else if ( endorsement_carousel_heading_text_h2_idx > 7 )
      endorsement_carousel_heading_text_h2_idx = 0;

    
    setTimeout(function() {
      endorsement_carousel_heading_text_h2.eq(endorsement_carousel_heading_text_h2_idx % endorsement_carousel_heading_text_h2.length)
      .fadeIn(500);
    }, 300);
    */
  }

  $('.endorsements-carousel-headings .carousel-navigation .cur-carousel').text('01/08');

  var $endorsements_carousel = $('.endorsements-carousel').flickity({
    draggable: false,
    autoPlay: 6000,
    pauseAutoPlayOnHover: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: true
  });
  //ssc_flickity = $endorsements_carousel.data('flickity');

  $('.endorsements-carousel-headings .carousel-navigation .left').on('click', function() {
    console.log('left');
    $('.endorsements-carousel .flickity-button.previous').click();
    // showNextEndorsement('left');
    
  });
  $('.endorsements-carousel-headings .carousel-navigation .right').on('click', function() {
    console.log('next');
    $('.endorsements-carousel .flickity-button.next').click();
    // showNextEndorsement('right');
  });

  $endorsements_carousel.on('select.flickity', function(event, index) { 
    $('.endorsements-carousel-headings .carousel-navigation .cur-carousel').text('0' + (index + 1) + '/08');
  });

  showNextEndorsement('intial');
});