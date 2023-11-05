//In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
function printCar(carObject) {
    console.log(carObject.name + " | " + carObject.model + " | " + carObject.milage);
    console.log(carObject); //object json
    console.log(typeof carObject); //object
}
var myCar = {
    name: "Maruti",
    model: "Brezza",
    milage: 20
};
printCar(myCar); // calling the function with an instance of car.
var myCarToyota = {
    name: "Totota",
    model: "Innova",
    milage: 20
};
printCar(myCarToyota); // print toyota car
//Additional Properties
var myCar2 = {
    name: "Maruti",
    model: "Brezza",
    milage: 20,
    //year: 2000
};
printCar(myCar2);
//Optional Properties
var myCarOptionalProperties1 = {
    name: "Maruti",
    model: "Brezza",
    milage: 10
};
//printCar(myCarOptionalProperties); // Comilation Error
var myCarOptionalProperties2 = {
    name: "Maruti",
    model: "Brezza",
    milage: 10
};
printCar(myCarOptionalProperties2);
function printFruit(fruitObject) {
    console.log(fruitObject);
}
var myFruitApple = {
    name: "Apple",
    taste: "Sweet"
};
printFruit(myFruitApple); //will print apple without optional properties.
var myFruitOrange = {
    name: "Orange",
    taste: "Sour",
    price: 10
};
printFruit(myFruitOrange); //Will print orange with all properites
