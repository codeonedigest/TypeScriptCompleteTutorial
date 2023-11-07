//TypeScript adds types and visibility modifiers to JavaScript classes.

//Members: Types - The members of a class (properties & methods) are typed using type annotations, similar to variables.
//Exercise-1
class Person {
    name: string
}

const person = new Person();
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
class Employee {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}

const emp = new Employee("Pawan");
console.log(emp.getName());


//Parameter Properties - TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
//Exercise-3
class Student{

    public constructor( private name: string) {
    }

    public getName() {
        return this.name;
    }
}

const student = new Student("pawan");
console.log(student.getName()); //pawan


//Readonly - Similar to arrays, the readonly keyword can prevent class members from being changed.
//Exercise-4
class Animal {
    public readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const animalobj = new Animal("CAT");
console.log(animalobj.getName()); // CAT
//animalobj.name = "DOG";
console.log(animalobj.name); // CAT

//Inheritance: Implements - Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
//A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {
//Excercise-5
interface Shape {
    //getArea: () => number;
    getArea(): number;
}

class Rectangle implements Shape {

    public constructor(protected width: number, protected height: number) {}

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number{
        return this.width * 2 + this.height * 2;
    }
}

const rectangle = new Rectangle(5,3);
console.log(rectangle.getArea()); //15
console.log(rectangle.getPerimeter()); //16

//Inheritance: Extends - Classes can extend each other through the extends keyword. A class can only extends one other class.
//Excercise-6
class Square extends Rectangle {

  public constructor(width: number) {
    super(width, width);
  }

  public override getPerimeter(): number {
      return this.width * 4;
  }
}


const square = new Square(5);
console.log(square.getArea()); //25
console.log(square.getPerimeter()); //20


//Abstract Classes - Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.

abstract class Polygon {
    public abstract getPerimeter(): number;
}

class Pantagon extends Polygon {

    public constructor(private side: number){
        super();    
    }

    public getPerimeter(): number {
        return 5*this.side;
    }
}

const pantagon = new Pantagon(6);
console.log(pantagon.getPerimeter()); //30