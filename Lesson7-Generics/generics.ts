//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
//Generics makes it easier to write reusable code.


//Functions - Generics with functions help make more generalized methods which more accurately represent the types used and returned.
//Exercise1
function createPair<S,T>(v1: S, v2:T): [S,T] {
    return [v1, v2];
}

console.log(createPair<string, number>('hello',40));
console.log(createPair<number, string>(50,'helloAgain'));
console.log(createPair<number, boolean>(100,true));



//Classes - Generics can be used to create generalized classes
//Exercise2
class NamedValue<T> {
    private value: T | undefined;

    constructor(private key: string){}

    public setValue(v: T) {
        this.value = v;
    }

    public getValue(): T | undefined {
        return this.value;
    }

    public getKey(): string{
        return this.key;
    }
}

const nv = new NamedValue<string>("name");
nv.setValue("pawan");
console.log(nv.getKey() + " = " + nv.getValue()); // name = pawan


const nv2 = new NamedValue<number>("age");
nv2.setValue(40);
console.log(nv2.getKey() + " = " + nv2.getValue()); // age = 40


//Type Aliases - Generics in type aliases allow creating types that are more reusable.
//Exercise3
type Wrapped<T> = { value: T };
const wrappedValue: Wrapped<number> = { value: 10 };
console.log(wrappedValue.value); //10
const wv2: Wrapped<string> ={ value: "string value"}
console.log(wv2.value); //string value



//Default Value - Generics can be assigned default values which apply if no other value is specified or inferred.
//Exercise4
class MyMap<T = string>{

    private value: T | undefined;

    constructor(private key: string){}

    public setValue(v: T) {
        this.value = v;
    }

    public getValue(): T | undefined{
        return this.value;
    }

    public getKey(): string{
        return this.key;
    }

}

const m = new MyMap<number>("age");
m.setValue(20);
console.log(m.getKey() + " = " + m.getValue()); // age = 20

const m2 = new MyMap("age");
//m2.setValue(20);
m2.setValue("Twenty");
console.log(m2.getKey() + " = " + m2.getValue()); // age = twenty


//Extends - Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
function createMyPair<S extends string | Number, T extends string | boolean>(v1: S, v2: T): [S, T] {
    return [v1,v2];
}

//console.log(createMyPair<string, number>("age", 30));
console.log(createMyPair<string, string>("name", "pawan")); //[name, pawan]
console.log(createMyPair<number, string>(50, "runs")); //[50, runs]
console.log(createMyPair<string, boolean>("myboolean", true)); //[myboolean, true]