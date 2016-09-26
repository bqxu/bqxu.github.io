$(function () {
  var uuid = function () {
    return new Date().getTime()
  };
  $('a[source-href]').each(function (i, n) {
    var sourceObj = $(n);
    if (sourceObj.attr('frame-flag') == 'compiled') {
      return
    }
    var defShow = sourceObj.attr('source-display');

    var src = sourceObj.attr('source-href');
    var _uuid = uuid();
    var pre = $('<pre id="pre_' + _uuid + '"></pre>');
    if (defShow != 'show') {
      pre.hide();
    }
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
