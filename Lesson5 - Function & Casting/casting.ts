//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.

//Exercise1 - Casting with as A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let x: unknown = "This is casting test";
console.log(x as string);
console.log((x as string).length);

//Exercise2 - Casting doesn't change the type of data. Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
let myVar: unknown = 4;
console.log((myVar as string).length); // prints undefined since numbers don't have a length.

//Exercise3 - Casting with <> Using <> works the same as casting with as.
let variableHello: unknown = "hello";
console.log(<string>variableHello);
console.log((<string>variableHello).length);

 