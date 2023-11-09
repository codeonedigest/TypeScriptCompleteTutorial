//Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
//Generics makes it easier to write reusable code.
//Functions - Generics with functions help make more generalized methods which more accurately represent the types used and returned.
//Exercise1
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 40));
console.log(createPair(50, 'helloAgain'));
console.log(createPair(100, true));
//Classes - Generics can be used to create generalized classes
//Exercise2
var NamedValue = /** @class */ (function () {
    function NamedValue(key) {
        this.key = key;
    }
    NamedValue.prototype.setValue = function (v) {
        this.value = v;
    };
    NamedValue.prototype.getValue = function () {
        return this.value;
    };
    NamedValue.prototype.getKey = function () {
        return this.key;
    };
    return NamedValue;
}());
var nv = new NamedValue("name");
nv.setValue("pawan");
console.log(nv.getKey() + " = " + nv.getValue()); // name = pawan
var nv2 = new NamedValue("age");
nv2.setValue(40);
console.log(nv2.getKey() + " = " + nv2.getValue()); // age = 40
var wrappedValue = { value: 10 };
console.log(wrappedValue.value); //10
var wv2 = { value: "string value" };
console.log(wv2.value); //string value
//Default Value - Generics can be assigned default values which apply if no other value is specified or inferred.
//Exercise4
var MyMap = /** @class */ (function () {
    function MyMap(key) {
        this.key = key;
    }
    MyMap.prototype.setValue = function (v) {
        this.value = v;
    };
    MyMap.prototype.getValue = function () {
        return this.value;
    };
    MyMap.prototype.getKey = function () {
        return this.key;
    };
    return MyMap;
}());
var m = new MyMap("age");
m.setValue(20);
console.log(m.getKey() + " = " + m.getValue()); // age = 20
var m2 = new MyMap("age");
//m2.setValue(20);
m2.setValue("Twenty");
console.log(m2.getKey() + " = " + m2.getValue()); // age = twenty
//Extends - Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
function createMyPair(v1, v2) {
    return [v1, v2];
}
//console.log(createMyPair<string, number>("age", 30));
console.log(createMyPair("name", "pawan")); //[name, pawan]
console.log(createMyPair(50, "runs")); //[50, runs]
console.log(createMyPair("myboolean", true)); //[myboolean, true]
