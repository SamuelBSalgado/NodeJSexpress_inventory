const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const {product} = require('./DB/products.js');
const Inventory = require('./DB/inventory.js');
const inv = new Inventory();

// const path = require('path');


// app.use(express.json());

// app.use(express.urlencoded({extended: true}));

// Agregar producto
// app.post('/add-product', (req, res) => {
// 	const {id, nombre, cantidad, costo} = req.body; //desestructuración del objeto
// 	const nuevoProducto = new Product(id, nombre, cantidad, costo);
// 	inventory.add(nuevoProducto);
// 	res.send('Producto agregado correctamente');
// });

// Página demostrativa
app.get('/', (req, res) => {
	console.log('Nueva solicitud (Página demostrativa)');
	res.send(`
	<html>
		<body style="background-color: rgb(73, 73, 73)">
			<div>
				<h1>Francisco Samuel Becerra Salgado 4°I</h1>
				<h2>Homepage</h2>
				<h3>jalanding</h3>

				<p>Para <span style="font-weight: bold; cursor: pointer;">agregar</span> productos, vaya a <span style="font-weight: bold; cursor: pointer;">localhost:3000/api/add</span></p>
				<p>Para <span style="font-weight: bold; cursor: pointer;">buscar</span> productos por medio de su id, vaya a <span style="font-weight: bold; cursor: pointer;">localhost:3000/api/id/"escriba aquí el numero del id"</span></p>
				<p>Para <span style="font-weight: bold; cursor: pointer;">mostrar/listar</span> los productos, vaya a <span style="font-weight: bold; cursor: pointer;">localhost:3000/api/lista</span></p>

				<p><span style="font-weight: bold;">Ojo:</span> Al iniciarse el programa, el array de productos está vacío, por lo que debe <span style="font-weight: bold;">agregar</span> productos antes.</p>
				<p>Puede intentar acceder a las URLs sin agregar nada para que vea la validación implementada</p>
				<p>También puede intentar <span style="font-weight: bold;">buscar</span> un producto con un <span style="font-weight: bold;">id</span> que <span style="font-weight: bold;">no</span> existe</p>
			</div>
		</body>
	</html>
	`);
});

// Página para agregar productos
app.get('/api/add', (req, res) => {
	console.log('Nueva solicitud (Pag. formulario)');
	res.send(`
	<html>
		<body style="background-color: rgb(73, 73, 73)">
			<div>
				<h1>Agregue su putada</h1>

				<form action="/api/productos" method="post">
					<label for="id">ID:</label>
					<input type="text" id="id" name="id">
					<br>

					<label for="nombre">Nombre:</label>
					<input type="text" id="nombre" name="nombre">
					<br>

					<label for="cantidad">Cantidad:</label>
					<input type="text" id="cantidad" name="cantidad">
					<br>

					<label for="costo">Costo:</label>
					<input type="text" id="costo" name="costo">
					<br>
					<br>

					<button type="submit">Agregar</button>
					</form>
			</div>
		</body>
	</html>
	`);
});

// Método post al que irá la info ingresada del formulario.
app.post('/api/productos', (req, res) => {
	console.log('Nueva solicitud (agregar method POST)');
	const {id, nombre, cantidad, costo} = req.body;
	const nuevoProd = {id, nombre, cantidad, costo};
	inv.add(nuevoProd);
	console.log(`Producto agregado: ${JSON.stringify(nuevoProd)}`);
	// console.log(`ID: ${id}, Nombre: ${nombre}, Cantidad: ${cantidad}, Costo: ${costo}.`);
	res.send(`
		<html>
			<body style="background-color: rgb(73, 73, 73)">
				<p style="font-size: 65px;">Producto agregado correctamente ✅</p>
			</body>
		</html>
	`);
});

// Buscar producto
app.get('/api/id/:id', (req, res) => {
	console.log('Nueva solicitud (Pag. buscar)');
	const productoEncontrado = inv.buscar(req.params.id);
	res.send(productoEncontrado);
});

// Listar productos
app.get('/api/lista', (req, res) => {
	console.log('Nueva solicitud (Pag. listar)');
	const productos = inv.list();
	res.send(productos);
});

// Página para agregar producto
// app.post('/api/add', (req, res) => {
// 	const nuevoProd = new product(req.body.id, req.body.nombre, req.body.cantidad, req.body.costo);
// 	inventory.add(nuevoProd);
// 	res.redirect('/');
// 	// res.sendFile(path.join('./', 'public', 'add-product.html'));
// });

const PORT = process.env.PORT || 3000; // process.env.PORT se usa para jalar el valor de un puerto si es que ya está definido como una variable en el ambiente (cuando se trabaja en proyectos reales).

app.listen(PORT, () => {
	console.log(`Ta jalando en el puerto ${PORT}.`);
});