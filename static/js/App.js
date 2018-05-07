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

  $('.pushpin-nav').each(function() {
    const $this = $(this);
    console.log($this);
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


});