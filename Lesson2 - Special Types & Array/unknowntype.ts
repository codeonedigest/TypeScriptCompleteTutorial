//Type unknown
let unknownvar: unknown = "codeonedigest";
console.log("value " + unknownvar);
console.log ("typeof " + typeof unknownvar);

unknownvar = 32;
console.log("value " + unknownvar);
console.log ("typeof " + typeof unknownvar);


let val: unknown; 
console.log(val); 
val = true; 
console.log(val); 
val = 7; 
console.log(val); 
val = "geeks for geeks"; 
console.log(val); 
val = [1, 2, 3, 4]; 
console.log(val); 
val = { name: "rachel" }; 
console.log(val); 
val = Math.random(); 
console.log(val); 
val = null; 
console.log(val); 
val = undefined; 
console.log(val); 


// unknown type variable can only be assigned to another unknown type variable or a variable of type any.
//unknown type is displayed as “undefined”.

let a: unknown; 
console.log(a); 
let b: unknown = a; 
console.log(b); 
let c: any = a; 
console.log(c); 


//unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
a = "codeonedigest";
console.log(typeof a);
console.log(a as string);
