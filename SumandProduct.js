function Product(...input_numbers)
{
    let sum=0,remainder=0,product=1;

    for(let nums of input_numbers)
        sum+=nums;

    while(sum>0)
    {
        remainder=sum%10;
        sum=Math.floor(sum/10);
        product=product*remainder;
        if(sum==0 && product>9)
        {
            sum=product;
            product=1;
        }
    }
    return product;
}

let finalProduct=Product(12,17,18);
console.log(finalProduct); //6

finalProduct=Product(1512,17,18,66,85);
console.log(finalProduct);  //8
