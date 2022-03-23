let numbers = [1,2,3,4,5,6,7];

//-----map function implementation
const map = function(array,callback){
  let mappedArray = []
  for(let index=0;index<array.length;index++){
    mappedArray.push(callback(array[index],index,array));
  }

  return mappedArray;
}

//testing map()
let newNumber =map(numbers,(item,index)=>{
    return item * index*2;})

console.log(newNumber);


//-----filter method implementation
const filter = function(array,callback){
    const filteredArray= [];
    for(let index=0;index <array.length;index++){
        if(callback(array[index],index,array))
        filteredArray.push(array[index]);
    }
    return filteredArray;
}

//testing filter()
const filteredArray = filter(numbers,item => {
 return item>4;
})

console.log(filteredArray);


//-----reduce method implementation
const reduce = (callback, initialValue, array) => {
     let value = initialValue;

     for(let index = 0; index < array.length; index++) {
       value = callback(value, array[index]);
     }
     return value;
   }

   //testing reduce()
   const sumReducer = (initialValue, current) => initialValue + current;

   const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)

   console.log("Custom reduce function, " + sumOfNumbersCustom);


//-----forEach method implementation
const forEach = function(array,callback) {
for (let index = 0; index < array.length; index++) {
  callback(array[index], index, array);
}
};

//testing forEach()
delete numbers[1];
numbers.forEach(el => console.log(el));
console.log('-------')
forEach(numbers,el => console.log(el))
