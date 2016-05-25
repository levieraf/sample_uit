var LibroVista = Uit.View.extend({
	template: _.template($('#item-template').html()),
	className: 'vista-libro',
	initialize: function (options) {
		Uit.View.prototype.initialize.apply(this, [options]);

		console.info('mi initialize');
	}
});

var LibroModel = Uit.Model.extend({
	defaults: {
		titulo: '',
		autor: '',
		email: ''
	}
});

model = new LibroModel();

model.set('titulo', 'Sample UIT');
model.set('autor', 'Luis Viera');
model.set('email', 'levieraf@gmail.com');

var vista = new LibroVista({
	model: model
});

Uit.htmlView(vista, '#main');