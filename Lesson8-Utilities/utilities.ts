//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
//This chapter covers the most popular utility types.


//Exercise-1 - Partial -Partial changes all the properties in an object to be optional.

interface point {
    x: number;
    y: number;
}

let xpoint: Partial<point> = {}; // `Partial` allows x and y to be optional
xpoint.x = 5;
console.log(xpoint.x + " and " + xpoint.y);  //5 and undefined



//Exercise-2 - Required - Required changes all the properties in an object to be required.

interface CAR {
    make: string;
    model: string;
    milege?: number;
}

let myCAR: Required<CAR> = {
    make: 'FORD',
    model: 'Ecosport Titanium',
    milege: 18  // `Required` forces mileage to be defined
}
console.log(myCAR);  //{ make: 'FORD', model: 'Ecosport Titanium', milege: 18 }

//Exercise-3 - Record - Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };

 console.log(nameAgeMap)   //{ Alice: 21, Bob: 25 }

 //Exercise-4 - Omit -Omit removes keys from an object type.
 interface Person {
    name: string;
    age: number;
    location?: string;
  }

  let myperson: Omit<Person, 'age' | 'location' >= {
    name:'Bob'
  }
  console.log(myperson)   //{ name: 'Bob' }


  //Exercise5 - Pick - Pick removes all but the specified keys from an object type.
  interface MyPerson {
    name: string;
    age: number;
    location?: string;
  }

  const bob: Pick<MyPerson, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };
  console.log(bob);  //{ name: 'Bob' }

  //Exercise6 - Exclude - Exclude removes types from a union.
  type Primitive = string | number | boolean
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
console.log(value);  //true


//Exercise6 - ReturnType - ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

//Exercise7 - Readonly - Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Cycle {
    brand: string;
    Size: number;
  }
  const myCycle: Readonly<Cycle> = {
    brand: "Firefox",
    Size: 35
  };
  console.log(myCycle);  //{ brand: 'Firefox', Size: 35 }
  //myCycle.brand = 'Giant'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
  //myCycle.size = 30;