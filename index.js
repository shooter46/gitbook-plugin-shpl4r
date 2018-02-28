module.exports = {

  book: {
    assets: './assets',
    css: [
      'shpl4r.css'
    ]
  },
  filters: {
	Arg: function(type, name, desc) {
	  var str = '<div class="arg-block">';
	  str += '<span class="arg-type">'+type+"</span> "+name;
	  if (content) {
		str += '<div class="arg-desc">'+desc+"</div></div>";
	  }
	  return name;
	}
  }
};
