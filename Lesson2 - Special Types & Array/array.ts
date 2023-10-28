const vararray: string[] = [];
vararray.push("codeonedigest");
console.log(vararray);
vararray.push("Typescript Tutorial");
console.log(vararray);
console.log(vararray);


let vararray2: string[] = [];
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
let readonlyArrayVar: readonly number[] = [1,2,3];
console.log(readonlyArrayVar);
//readonlyArrayVar.push(5); //push method is not available for readonly array.
console.log(readonlyArrayVar);