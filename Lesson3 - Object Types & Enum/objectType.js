//The TypeScript object type represents all values that are not in primitive types.
//We can define objects in 2 ways 
//Example-1  object type
var car = {
    type: "Toyota",
    model: "Innova",
    year: 2000
};
console.log(car.type + " | " + car.model + " | " + car.year);
//Example-2 define object type and initialize with value
var fruit;
fruit = {
    name: 'apple',
    taste: 'sweet'
};
console.log(fruit);
//Example-3 define object type with properties
var animal;
animal = {
    name: 'tiger',
    strength: 'speed'
};
console.log(animal);
car.model = 'fortuner';
console.log(car);
//fruit.taste='sour';
//console.log(fruit.taste);
animal.name = 'lion';
console.log(animal);
//Example-4 Optional properties
var book;
book = {
    name: 'my book',
    author: 'codeonedigest'
};
console.log(book);
console.log(book.name);
// We can also define object as interface and later we can initialize object of type interface. This we will see in upcoming videos
