$(function() {
  // $('.tlink')
  var hash = location.hash || '#about';
  $('.tlink').find('a').remove('active')
  $('.tlink').find('a[href=' + hash + ']').addClass('active')

  window.onhashchange = function() {
    var hash = location.hash;
    $('.tlink').find('a').removeClass('active')
    $('.tlink').find('a[href=' + hash + ']').addClass('active')
  }
})