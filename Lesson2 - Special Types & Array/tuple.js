//A tuple is a typed array with a pre-defined length and types for each index.
var tuppleArray;
tuppleArray = [1, true, "type array test"];
console.log(tuppleArray);
console.log(typeof tuppleArray);
//try setting value in wrong order throws error
//tuppleArray = [true, "wrong sequence test", 2];
//now this will let us push another item in the tuple array
tuppleArray.push("new item test in tuple");
console.log(tuppleArray);
