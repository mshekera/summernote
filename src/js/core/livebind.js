define('summernote/core/livebind', function () {
  
  var livebind = (function () {
    var result = {
      process: function ($el, content, options) {
        var tplName = 'tpl' + Math.floor(Math.random() * 1000);
        can.mustache(tplName, content);
        $el.html(can.view('#' + tplName, options.module));
      }
    };

    return result;
  })();

  return livebind;
});
