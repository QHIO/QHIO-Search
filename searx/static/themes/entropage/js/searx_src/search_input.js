$(function() {
  var $deleteIcon = $('#search_form').find('.delete');
  var $q = $('#q');

  function toggle(val) {
    if (val.length > 0) {
      $deleteIcon.show();
    } else {
      $deleteIcon.hide();
    }
  }

  var val = $q.val();
  toggle(val);
  $q.on('keypress', function(e) {
    var val = e.target.value;
    toggle(val);
  });

  $deleteIcon.on('click', function() {
    $q.val('');
    $deleteIcon.hide();
    $q.focus();
  });
});