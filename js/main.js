$('ul.lighting-list a').on('click',function(e){
  var $link = $(e.currentTarget);
  if ($link.hasClass('on')){
    $link.removeClass('on');
  }
  else{
    $link.addClass('on');
  }
  // $(e.currentTarget).toggleClass('on');
});

function selector(prefix){
  return {
    "all": " ",
    "all-exteriors":'.exterior',
    "all-interiors":'.interior',
    "all-bathrooms":'.bathroom'

  }[prefix];
}

$("div.actions input[type='button']").on('click', function(e){
  e.preventDefault();
  var idPrefix = $(e.currentTarget).attr('id').
    replace('-on', '').
    replace('-off', '');
  var $anchorsToManipulate = $('ul.lighting-list ' + selector(idPrefix) + ' a');

  if($(e.currentTarget).attr('id').match(/on/)){
    $anchorsToManipulate.addClass('on');
  }
  else{
    $anchorsToManipulate.removeClass('on');
  }
});

