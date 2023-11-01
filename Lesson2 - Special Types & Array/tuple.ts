//A tuple is a typed array with a pre-defined length and types for each index.


let tuppleArray: [number, boolean, string];
tuppleArray = [1,true,"type array test"];
console.log(tuppleArray);
console.log(typeof tuppleArray);


//try setting value in wrong order throws error
//tuppleArray = [true, "wrong sequence test", 2];


//now this will let us push another item in the tuple array
tuppleArray.push("new item test in tuple");
tuppleArray.push(45);
console.log(tuppleArray);


//To prevent from adding more items in typearray so make it readonly
let readyonlyTuppleArray: readonly [number, boolean, string];
readyonlyTuppleArray = [1,true,"type array test"];
console.log(readyonlyTuppleArray);

//readyonlyTuppleArray.push("new item test"); // this line shows compile error

