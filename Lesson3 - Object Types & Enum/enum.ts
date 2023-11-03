

//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric. Lets start with numeric.
//By default, enums will initialize the first value to 0 and add 1 to each additional value.

//Example-1 Numeric Enum
enum cardinalDirections {
    North,
    East,
    South,
    West
  }

console.log(cardinalDirections); //whole enum
console.log(cardinalDirections.North); //0

let currentDirection = cardinalDirections.East;
console.log(currentDirection); //1

// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
currentDirection = cardinalDirections.West;
console.log(currentDirection) //3


//Example-2  You can set the value of the first numeric enum and have it auto increment from that:

enum days {
    monday = 1,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}
console.log(days);
console.log(days.tuesday);


//Example-3 Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically.

enum statusCodes {
    NOTFOUND = 404,
    SUCCESS = 200,
    ACCEPTED = 201,
    ERROR = 500
}
console.log(statusCodes);
console.log(statusCodes.ACCEPTED);


//Example-4 String Enum
// Enums can also contain strings. This is more common than numeric enums.

enum directions {
    NORTH = 'north',
    SOUTH = 'south',
    EAST = 'east',
    WEST = 'west'
}
console.log(directions);
console.log(directions.EAST);

