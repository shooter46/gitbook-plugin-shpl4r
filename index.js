function createArg(type, name, content) {
  var element = '<div class="arg-block">';
  element += '<span class="arg-type">'+type+"</span> "+name;

  if (content) {
    element += '<div class="arg-desc">'+content+"</div></div>";
  }

  return element;
}

module.exports = {

  book: {
    assets: './assets',
    css: [
      'shpl4r.css'
    ]
  },

  blocks: {
    Arg: {
      process: function(block) {
        var type = block.kwargs.type || 'default';
        var name = block.kwargs.name;

        return this
            .renderBlock('markdown', block.body)
            .then(function(renderedBody) {
              return createArg(type, name, renderedBody);
            });
      }
    }
  },
  filters: {
	warning: function(name) {
      return 'Hello '+name;
    }
  }
};
