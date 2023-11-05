//TypeScript has a specific syntax for typing function parameters and return values.
//Exercise1 - Return Type - The type of the value returned by the function can be explicitly defined.
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//Exercise2 - Void Return Type The type void can be used to indicate a function doesn't return any value.
function getTimeVoidTest() {
    console.log("Void Function");
    //return new Date();
}
console.log(getTimeVoidTest());
//Exercise3 - Parameters Function parameters are typed with a similar syntax as variable declarations.
//If no parameter type is defined, TypeScript will default to using any.
function multiply(a, b) {
    return a * b;
}
console.log("multiply " + multiply(2, 3));
function sum(a, b) {
    return a + b;
}
console.log("sum " + sum(3, 5));
console.log(typeof sum(5, 5));
//Exercise4 - Optional Parameters - By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
function sumOptionTest(a, b, c) {
    return a + b + (c || 0);
}
console.log(sumOptionTest(5, 6));
console.log(sumOptionTest(5, 6, 7));
//Exercise5 - Default Parameters For parameters with default values, the default value goes after the type annotation:
//TypeScript can also infer the type from the default value.
function divideDefaultTest(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
console.log(divideDefaultTest(10, 2));
console.log(divideDefaultTest(20));
//Exercise6 - Named Parameters Typing named parameters follows the same pattern as typing normal parameters.
function nameParameterTest(_a) {
    var a = _a.a, b = _a.b;
    return a / b;
}
console.log(nameParameterTest({ a: 20, b: 5 }));
//Exercise7 - Rest Parameters - Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function addRestParameter(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.length;
}
console.log(addRestParameter(10, 10, 10, 10));
