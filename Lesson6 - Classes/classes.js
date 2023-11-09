//TypeScript adds types and visibility modifiers to JavaScript classes.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Members: Types - The members of a class (properties & methods) are typed using type annotations, similar to variables.
//Exercise-1
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = 'Pawan';
console.log(person.name); //Pawan
//Members: Visibility - Class members also be given special modifiers which affect visibility.
/*
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
//The this keyword in a class usually refers to the instance of the class.
//Exercise-2
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var emp = new Employee("Pawan");
console.log(emp.getName());
//Parameter Properties - TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
//Exercise-3
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var student = new Student("pawan");
console.log(student.getName()); //pawan
//Readonly - Similar to arrays, the readonly keyword can prevent class members from being changed.
//Exercise-4
var Animal = /** @class */ (function () {
    function Animal(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var animalobj = new Animal("CAT");
console.log(animalobj.getName()); // CAT
//animalobj.name = "DOG";
console.log(animalobj.name); // CAT
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return this.width * 2 + this.height * 2;
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 3);
console.log(rectangle.getArea()); //15
console.log(rectangle.getPerimeter()); //16
//Inheritance: Extends - Classes can extend each other through the extends keyword. A class can only extends one other class.
//Excercise-6
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    Square.prototype.getPerimeter = function () {
        return this.width * 4;
    };
    return Square;
}(Rectangle));
var square = new Square(5);
console.log(square.getArea()); //25
console.log(square.getPerimeter()); //20
//Abstract Classes - Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    return Polygon;
}());
var Pantagon = /** @class */ (function (_super) {
    __extends(Pantagon, _super);
    function Pantagon(side) {
        var _this = _super.call(this) || this;
        _this.side = side;
        return _this;
    }
    Pantagon.prototype.getPerimeter = function () {
        return 5 * this.side;
    };
    return Pantagon;
}(Polygon));
var pantagon = new Pantagon(6);
console.log(pantagon.getPerimeter()); //30
