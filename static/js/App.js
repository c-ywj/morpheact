$().ready(() => {

// scroll activated animation popping action
  // const aboutBox = $('div.about');
  // const aboutBoxOffset = aboutBox.offset().top/1.5;
  // const documentWhole = $(document);

  // documentWhole.on('scroll', () => {
  //   if(documentWhole.scrollTop() > aboutBoxOffset
  //       && aboutBox.hasClass('hidden')) {
  //     aboutBox.removeClass('hidden');
  //   }
  // });

    //#main-slider
  // const slideHeight = $(window).height();
  // $('#home-slider .item').css('height',slideHeight);

  // $(window).resize(function(){'use strict',
  //   $('#home-slider .item').css('height',slideHeight);
  // });

  $('.pushpin-nav').each(function() {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });


  //Scroll Menu
  // $(window).on('scroll', function(){
  //   if( $(window).scrollTop()>slideHeight ){
  //     $('.main-nav').addClass('navbar-fixed-top');
  //   } else {
  //     $('.main-nav').removeClass('navbar-fixed-top');
  //   }
  // });


})