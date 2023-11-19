//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
//This chapter covers the most popular utility types.
var xpoint = {}; // `Partial` allows x and y to be optional
xpoint.x = 5;
console.log(xpoint.x + " and " + xpoint.y);
var myCAR = {
    make: 'FORD',
    model: 'Ecosport Titanium',
    milege: 18 // `Required` forces mileage to be defined
};
console.log(myCAR);
//Exercise-3 - Record - Record is a shortcut to defining an object type with a specific key type and value type.
var nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMap);
var myperson = {
    name: 'Bob'
};
console.log(myperson);
var bob = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bob);
var value = true; // a string cannot be used here since Exclude removed it from the type.
console.log(value);
var point = {
    x: 10,
    y: 20
};
var myCycle = {
    brand: "Firefox",
    Size: 35
};
console.log(myCycle);
//myCycle.brand = 'Giant'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
