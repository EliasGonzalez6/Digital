const suma = require("./modulos/suma");
const resta = require("./modulos/resta");
const multi = require("./modulos/multi");
const divi = require("./modulos/divi");

let resultadoSuma = suma(1,4);
console.log(resultadoSuma);

let resultadoResta = resta(5,2);
console.log(resultadoResta);

let resultadoMulti = multi(0,7);
console.log(resultadoMulti);

let resultadoDivi = divi(8,0);
console.log(resultadoDivi);
