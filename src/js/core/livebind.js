define('summernote/core/livebind', function () {
  
  var livebind = (function () {
    var parse = function (content, options) {
      var tplName = 'tpl' + Math.floor(Math.random() * 1000);
      can.mustache(tplName, content);
      return can.view('#' + tplName, options.module);
    };

    var process = function ($el, content, options) {
      $el.html(parse(content, options));
    };

    return {
      parse: parse,
      process: process
    };
  })();

  return livebind;
});
