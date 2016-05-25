// Declaracion de vista
var LibroVista = Uit.View.extend({
	template: _.template($('#item-template').html()),
	className: 'vista-libro',
	initialize: function (options) {
		Uit.View.prototype.initialize.apply(this, [options]);

		console.info('mi initialize');
	}
});

// Declaracion de Modelo
var LibroModel = Uit.Model.extend({
	defaults: {
		titulo: '',
		autor: '',
		email: ''
	},
	urlRoot: 'personas.php'
});

model = new LibroModel();

model.set('id', 4);
model.set('titulo', 'Sample UIT');
model.set('autor', 'Luis Viera');
model.set('email', 'levieraf@gmail.com');

var vista = new LibroVista({
	model: model
});

// Renderizacion de vista en DOm
Uit.htmlView(vista, '#main');