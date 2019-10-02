$(function() {
  $('.entro-nav-btn').on('click', function() {
      $(this).siblings('.entro-nav').toggle();

      console.log($(this).siblings('.entro-nav'));

      $(this).css({
        'background-image': 'url(' + $(this).data('activeBg') + ')'
      });
  });

  $(document).on('click', function(e) {
    if (e.target.className !== 'entro-nav-btn') {
      $('.entro-nav').hide();

      $('.entro-nav-btn').css({
        'background-image': 'url(' + $('.entro-nav-btn').data('bg') + ')'
      });
    }
  });
});