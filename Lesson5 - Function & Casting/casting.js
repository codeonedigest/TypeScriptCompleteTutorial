//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
//Casting is the process of overriding a type.
//Exercise1 - Casting with as A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
var x = "This is casting test";
console.log(x);
console.log(x.length);
//Exercise2 - Casting doesn't change the type of data. Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable x is still holds a number.
var myVar = 4;
console.log(myVar.length); // prints undefined since numbers don't have a length.
//Exercise3 - Casting with <> Using <> works the same as casting with as.
var variableHello = "hello";
console.log(variableHello);
console.log(variableHello.length);
