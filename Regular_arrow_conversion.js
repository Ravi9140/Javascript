function Arrow_Regular_Swap(input_string)
{
    let convertedFunction;
    if(input_string.includes('function'))
    {
        convertedFunction=convertoArrow(input_string);
    }
    else
    {
        convertedFunction=converttoRegular(input_string);
    }
    return convertedFunction;
}

function convertoArrow(regular_function)
{
    let arrow_function=regular_function.replace("function","");
    let insert_index=arrow_function.indexOf(")");
    let arrow_function1=arrow_function.substring(0,insert_index+1) + " =>" + arrow_function.substring(insert_index+1,arrow_function.length);
    
    // Count the Occurences of ;
    let count = regular_function.split(';').length - 1;
    
    // if the count of ; is less than 2 then arrow function is 1 line code
    if(count<=2)
    {
        let arrow_function2=arrow_function1.replace("return","");
        let arrow_function3=arrow_function2.replace("{\n","");
        let arrow_function4=arrow_function3.replace("};","");
        let arrow_function5= arrow_function4.replace("\n"," ");
        return arrow_function5;
    }
    return arrow_function1;
}

function converttoRegular(arrow_function)
{
    let reg_function=arrow_function.replace("= ","= function");

    if(!arrow_function.includes('return'))
    {
        let reg_function1=reg_function.replace("=>"," {\n\treturn ");
        let reg_function2=reg_function1.replace(";",";\n};");
        return reg_function2;
    }
    return reg_function;
}

let equiFunction="";
equiFunction=Arrow_Regular_Swap(`let sum = function(a, b) {
    return a + b;
};`);
console.log(`${equiFunction}\n`);

equiFunction=Arrow_Regular_Swap(`let sum = function(a, b) {
    a=a*6;
    b=b-6;
    return a + b;
};`);
console.log(`${equiFunction}\n`);

equiFunction=Arrow_Regular_Swap(`let addition = (a, b) => a + b;`);
console.log(`${equiFunction}\n`);

equiFunction=Arrow_Regular_Swap(`let addition = (a, b) {
    a=a*6;
    b=b-6;
    return a + b;
};`);
console.log(`${equiFunction}\n`);
