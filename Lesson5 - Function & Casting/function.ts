//TypeScript has a specific syntax for typing function parameters and return values.


//Exercise1 - Return Type - The type of the value returned by the function can be explicitly defined.
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());


//Exercise2 - Void Return Type The type void can be used to indicate a function doesn't return any value.
function getTimeVoidTest(): void {
    console.log("Void Function");
    //return new Date();
}
console.log(getTimeVoidTest());

//Exercise3 - Parameters Function parameters are typed with a similar syntax as variable declarations.
//If no parameter type is defined, TypeScript will default to using any.
function multiply(a: number, b: number): number {
    return a*b;
}
console.log("multiply " + multiply(2,3));

function sum(a: number, b: number) {  //automatically setting return type
    return a + b;
}
console.log("sum " + sum(3,5));
console.log(typeof sum(5,5));


//Exercise4 - Optional Parameters - By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

function sumOptionTest(a: number, b: number, c?:number): number {
    return a + b + (c || 0);
}
console.log(sumOptionTest(5,6));
console.log(sumOptionTest(5,6,7));


//Exercise5 - Default Parameters For parameters with default values, the default value goes after the type annotation:
//TypeScript can also infer the type from the default value.
function divideDefaultTest(a: number, b: number = 1): number {
    return a/b;
}
console.log(divideDefaultTest(10,2));
console.log(divideDefaultTest(20));

//Exercise6 - Named Parameters Typing named parameters follows the same pattern as typing normal parameters.
function nameParameterTest({a,b}: {a: number, b:number}) {
    return a/b;
}
console.log(nameParameterTest({a:20,b:5}));


//Exercise7 - Rest Parameters - Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function addRestParameter(a:number,b:number,...rest: number[]) {
    return a + b + rest.length; //22
}

console.log(addRestParameter(10,10,10,10));
  
