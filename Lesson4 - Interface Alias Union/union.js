//Union types are used when a value can be more than a single type. Such as when a property would be string or number.
//Union | OR
function printStatusCode(code) {
    console.log(code);
}
printStatusCode(404);
printStatusCode("404 Resource Not Found ");
//Union Type Errors
/*function printStatusCode2(code: string | number) {
    console.log(code.toUpperCase());
}*/
