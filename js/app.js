var viewLibro = Uit.View.extend({
	template: _.template($('#item-template').html()),
	className: 'vista-libro',
	initialize: function () {
		console.info('mi initialize');
	}
});

var modelLibro = new Uit.Model.extend({
	default: {
		titulo: 'Texto aqui',
		autor: 'Autor aqui'
	}
});

var mivista = new viewLibro({
	model: modelLibro
});

Uit.htmlView(mivista, '#main');