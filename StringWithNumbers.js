function stringWithNumbers(Cars)
{
    var modelwithnumber=[];
    for(let model_name of Cars)
    {
        if(/\d/.test(model_name))
        {
            modelwithnumber.push(model_name);
        }
    }
    return modelwithnumber;
}

var CarModels=["HyundaiX2","SUVUltra","Thar65","Innova","Suzuki6"];
var NumberModels=stringWithNumbers(CarModels);
console.log(NumberModels);
