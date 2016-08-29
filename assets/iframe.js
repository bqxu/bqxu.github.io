'use strict';
$(function() {
  var uuid = function() {
    return new Date().getTime()
  };
  $('iframe').each(function(i, n) {
    var frameObj = $(n);
    if (frameObj.attr('frame-flag') == 'compiled') {
      return
    }
    var src = frameObj.attr('src');
    var _uuid = uuid();
    var div = $('<div id="div_' + _uuid + '"></div>');
    frameObj.after(div);
    div.append($('<a class="look-source" id="' + _uuid + '" href="javascript:void(0)">source</a>'));
    var pre = $('<pre id="pre_' + _uuid + '" style="display: none;"></pre>');
    div.append(pre);
    $.ajax({
      url: src,
      dataType: "text",
      success: function(data) {
        pre.text(data);
      }
    });
    frameObj.attr('frame-flag', 'compiled');
  });
  $('body').on('click.source', 'a.look-source', function() {
    var $this = $(this);
    $this.nextAll('pre').slideToggle();
  })
});
