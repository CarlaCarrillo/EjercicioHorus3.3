const svr = require('http');
const url = require('url');

//Aquí hay que jalar los 'require' adicionales que puedan hacer falta como FileSystem, etc.
const host = '127.0.0.1';
const puerto = '8000';

const servidor = svr.createServer((pet, resp) => {
	let respuesta = '';
	resp.setHeader('Content-Type', 'text/plain');
	if (pet.method == 'GET') {
		respuesta = procesaGet(pet);
		resp.statusCode = 200;
	} else {
		resp.statusCode = 404;
	}
	resp.end(respuesta);
});

servidor.listen(puerto, host, () => {
	console.log('La aplicación está corriendo en: ' + host + ':' + puerto);
});

	
//Aquí necesitan analizar la URL de la petición, ver qué botón se presionó y actuar en consecuencia.

function procesaGet(peticion) {
	console.log(peticiones.url);
	//usando el ejemplo del código del ej 3.2 se puede poner aquí
	//lo importante es dar de alta uno nuevo, más que los otros dos
	//Nota: para agregar algo a un JSON se puede usar:
	//lo oque está entrecomillado pueden ser variables que recibimos desde
	let miURL = url.parse(peticion.url, TRUE);
	if (miURL.query.func === 'alta') { //"func" es arbitrario, lo decidí
		let nuevoRegistro = { 
			nombre: miURL.query.n, //igual pasa con n
			edad: miURL.query.ed,   //....ap
			genero: miURL.query.ge} //...y am
	}
	modelo.push(nuevoRegistro); //meter el nuevo objeto al arreglo
	//esto espra ser llamado con una URL parecido a:
	//127.0.0.1:8000/?func=alta&n=juan&ap=perez&am=contrataca
}


function procesaPost(peticion) {
	//Igualmente, aquí hay que obtener el valor que venga en la URL...
	//console.log(peticion.url)
}
