$().ready(() => {

  const aboutBox = $('div.about');
  const aboutBoxOffset = aboutBox.offset().top/1.5;
  const documentWhole = $(document);

  documentWhole.on('scroll', () => {
    if(documentWhole.scrollTop() > aboutBoxOffset
        && aboutBox.hasClass('hidden')) {
      aboutBox.removeClass('hidden');
    }
  });

})