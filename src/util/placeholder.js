import $ from 'jquery';

// 标签需要有id和class，class用于编写样式，id用于命名
function FauxPlaceholder(el, binding) {
  if(!ElementSupportAttribute('input','placeholder')) {
    var $input = $(el);

    const clone = $input.clone();
    clone.removeAttr('v-placeholder').removeAttr('type').removeAttr('placeholder')
      .attr('value', $input.attr('placeholder'))
      .attr('id', $input.attr('id')+ '-faux')
      .attr('style', "display:none;")
      .attr('type', 'text');
    $input.after(clone);
    var $faux = $('#'+$input.attr('id')+'-faux');
    $faux.show().attr('class', $input.attr('class'));
    $input.hide();
    $faux.focus(function() {
      $faux.hide();
      $input.show().focus();
    });
    $input.blur(function() {
      if($input.val() === '') {
        $input.hide();
        $faux.show();
      }
    });
  }
}
// 检查标签是否支持该属性
function ElementSupportAttribute(elm, attr) {
  var test = document.createElement(elm);
  return attr in test;
}
export default {
  inserted: function(el, binding){
    FauxPlaceholder(el, binding);
  }
}