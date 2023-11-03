
//In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.


//Interface
interface car {
    name: string,
    model: string,
    milage: number
}

let myCar = {
    name: "Maruti",
    model: "Brezza",
    milage: 20
}

function printCar(carObject: car) {
    console.log(carObject.name + " | " + carObject.model + " | " + carObject.milage);
    console.log(carObject);
    console.log(typeof carObject);
}

printCar(myCar);

let myCarToyota: car = {
    name: "Totota",
    model: "Innova",
    milage: 20
}

printCar(myCarToyota);


//Additional Properties
let myCar2 = {
    name: "Maruti",
    model: "Brezza",
    milage: 20,
    year: 2000
}

printCar(myCar2);


//Optional Properties
let myCarOptionalProperties1 = {
    name: "Maruti",
    model: "Brezza"
}

//printCar(myCarOptionalProperties); // Comilation Error

let myCarOptionalProperties2 = {
    name: "Maruti",
    model: "Brezza",
    milage: 10
}

printCar(myCarOptionalProperties2);


// Fruit Interface
interface Fruit{
    name: string,
    taste: string,
    price?: number
}

function printFruit(fruitObject: Fruit) {
    console.log(fruitObject);
}

let myFruitApple = {
    name: "Apple",
    taste: "Sweet"
}

printFruit(myFruitApple); //will print apple without optional properties.

let myFruitOrange = {
    name: "Orange",
    taste: "Sour",
    price: 10
}

printFruit(myFruitOrange); //Will print orange with all properites