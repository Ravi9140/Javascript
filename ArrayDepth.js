function depth(input_array)
{
    for (let i=0;i<input_array.length;i++)
    {
        if(typeof input_array[i] == "object")
        {
            depthCount++;
            depth(input_array[i]);
        }
    }
    return depthCount;
}

var depthCount=1;
var userInput=[1,2,3,4];
var array_depth=depth(userInput);
console.log(`Array Depth of [1,2,3,4] => ${array_depth}`);

depthCount=1;
userInput=[1,[2,3,4]];
array_depth=depth(userInput);
console.log(`\nArray Depth of [1,[2,3,4]] => ${array_depth}`);

depthCount=1;
userInput=[1,[2,[3,4]]];
array_depth=depth(userInput);
console.log(`\nArray Depth of [1,[2,[3,4]]] => ${array_depth}`);

depthCount=1;
userInput=[1,[2,[3,[4]]]];
var array_depth=depth(userInput);
console.log(`\nArray Depth of [1,[2,[3,[4]]]] => ${array_depth}`);
