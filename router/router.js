const pag1 = require ('../controlers/pag1');
const router = (req, res) => {
	console.log(req.url);
	if(req.url === "/pag1") {	
		//pag1(req); //para llamar al lcontrolador
		var result = pag1(req);
		res.end(JSON.stringify(result));
	}

};



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
	modelo.push(data); //meter el nuevo objeto al arreglo
	//esto espra ser llamado con una URL parecido a:
	//127.0.1:800/?func=alta&n=fulanito&ed=37&ge=masculino
	//127.0.0.1:8000/?func=alta&n=juan&ap=perez&am=contrataca
}

module.exports = router;
