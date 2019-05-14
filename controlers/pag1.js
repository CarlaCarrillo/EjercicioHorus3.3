const modelpag1 = require ('../models/modelpag1');
const pag1 =(req) => {
	return modelpag1();
};


//const pag1 = (req) => {
//	return req.url;
//};

//function numeros(){
//    for(let i=0, max=10; i<max; i++){
//        console.log("Numero " + (i+1));
//    }
//}
//numeros();


module.exports = pag1;