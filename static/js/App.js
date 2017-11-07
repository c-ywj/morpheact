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
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });



})