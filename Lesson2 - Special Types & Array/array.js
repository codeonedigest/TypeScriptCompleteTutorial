//Typescript - Array
//TypeScript has a specific syntax for typing arrays.
var vararray = [];
vararray.push("codeonedigest");
console.log(vararray);
vararray.push("Typescript Tutorial");
console.log(vararray);
var vararray2 = [];
vararray2.push("codeonediges2");
console.log(vararray2);
vararray2.push("Typescript Tutorial2");
console.log(vararray2);
console.log(typeof vararray2);
//const varable re-assignment is not possible.
//vararray = vararray2;
vararray2 = vararray;
console.log(vararray2);
//readonly array
var readonlyArrayVar = [1, 2, 3];
console.log(readonlyArrayVar);
//readonlyArrayVar.push(5); //push method is not available for readonly array.
console.log(readonlyArrayVar);
