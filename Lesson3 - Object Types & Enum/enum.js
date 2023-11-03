//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric. Lets start with numeric.
//By default, enums will initialize the first value to 0 and add 1 to each additional value.
//Example-1 Numeric Enum
var cardinalDirections;
(function (cardinalDirections) {
    cardinalDirections[cardinalDirections["North"] = 0] = "North";
    cardinalDirections[cardinalDirections["East"] = 1] = "East";
    cardinalDirections[cardinalDirections["South"] = 2] = "South";
    cardinalDirections[cardinalDirections["West"] = 3] = "West";
})(cardinalDirections || (cardinalDirections = {}));
console.log(cardinalDirections); //whole enum
console.log(cardinalDirections.North); //0
var currentDirection = cardinalDirections.East;
console.log(currentDirection); //1
// throws error as 'North' is not a valid enum
//currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
currentDirection = cardinalDirections.West;
console.log(currentDirection); //3
//Example-2  You can set the value of the first numeric enum and have it auto increment from that:
var days;
(function (days) {
    days[days["monday"] = 1] = "monday";
    days[days["tuesday"] = 2] = "tuesday";
    days[days["wednesday"] = 3] = "wednesday";
    days[days["thursday"] = 4] = "thursday";
    days[days["friday"] = 5] = "friday";
    days[days["saturday"] = 6] = "saturday";
    days[days["sunday"] = 7] = "sunday";
})(days || (days = {}));
console.log(days);
console.log(days.tuesday);
//Example-3 Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically.
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["NOTFOUND"] = 404] = "NOTFOUND";
    statusCodes[statusCodes["SUCCESS"] = 200] = "SUCCESS";
    statusCodes[statusCodes["ACCEPTED"] = 201] = "ACCEPTED";
    statusCodes[statusCodes["ERROR"] = 500] = "ERROR";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes);
console.log(statusCodes.ACCEPTED);
//Example-4 String Enum
// Enums can also contain strings. This is more common than numeric enums.
var directions;
(function (directions) {
    directions["NORTH"] = "north";
    directions["SOUTH"] = "south";
    directions["EAST"] = "east";
    directions["WEST"] = "west";
})(directions || (directions = {}));
console.log(directions);
console.log(directions.EAST);
