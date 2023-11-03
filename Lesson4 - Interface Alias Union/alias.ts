//Type Aliases allow defining types with a custom name (an Alias).
//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:


type CarYear = number
type CarType = string
type CarModel = string

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

let myCarInnova: Car = {
    year: 2000,
    type: "SUV",
    model: "INNOVA"
}
console.log(typeof myCarInnova);
console.log(myCarInnova);
console.log(typeof myCarInnova.model + " | " + typeof myCarInnova.type + " | " + typeof myCarInnova.year)
