function Boomerang(input_array)
{
    var boomerang_count=0;
    for(let i=0;i<input_array.length-2;i++)
    {
        if(input_array[i]==input_array[i+2])
        {
            console.log(`Boomerang ${++boomerang_count}:[${input_array[i]},${input_array[i+1]},${input_array[i+2]}]`);
        }
    }
    return boomerang_count;
}

var user_input=[3,7,3,2,1,5,1,2,2,-2,2];
var count=Boomerang(user_input);
console.log(`Total Boomerangs = ${count}\n`);

var user_input=[2,2,2,2,2,2,2,-2,2];
var count=Boomerang(user_input);
console.log(`Total Boomerangs = ${count}\n`);
