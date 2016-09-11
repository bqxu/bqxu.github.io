$(function () {
  var uuid = function () {
    return new Date().getTime()
  };
  $('a[source-href]').each(function (i, n) {
    var sourceObj = $(n);
    if (sourceObj.attr('frame-flag') == 'compiled') {
      return
    }
    var src = sourceObj.attr('source-href');
    var _uuid = uuid();
    var pre = $('<pre id="pre_' + _uuid + '" style="display: none;"></pre>');
    sourceObj.after(pre);
    $.ajax({
      url: src,
      dataType: "text",
      success: function (data) {
        pre.text(data);
      }
    });
    sourceObj.attr('frame-flag', 'compiled');
  });
  $('body').on('click.source', 'a[source-href]', function () {
    var $this = $(this);
    $this.next().slideToggle();
  })
});
