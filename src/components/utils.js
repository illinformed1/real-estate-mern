



export let numberDropHandler = (existingArray, newValue) => newValue !== "" ? [...existingArray,...newValue] : existingArray.slice(0, -1)

//export let priceDropHandler = () => 


/* I can enter a value 1 , 2, 3 an associate that with a price, but people might enter weird prices like 499999 so I need a range, but a range means every possible number in an array
and that's pretty inefficeint. 

1. filterable price value when I create listings. 
2. every possible price in the array. 

{key: 1, text:"5,000 - 7,000", value:1},
              {key: 2, text:"7,000 - 10,000", value:2},
              {key: 3, text:"10,000 - 15,000", value:3}, 
              {key: 4, text:"15,000 - 25,000", value:4}, 
              {key: 5, text:"25,000 - 35,000", value:5},
              {key: 6, text:"35,000 - 50,000", value:6},
              {key: 7, text:"50,000 - 75,000", value:7},
              {key: 8, text:"75,000 - 100,000", value:8},
              {key: 9, text:"150,000 - 200,000", value:9},
              {key: 10, text:"250,000 - 300,000", value:10},


              function to seperate the numbers and then create and array that has all the thousands or ten thousands between them 


the problem now is that

*/


let rangeBuilder = (num1, num2) => {

let placeValueAdder = 10 ** (num1.length -2)
console.log(placeValueAdder)
var lowEnd = num1;
var highEnd = num2;
var arr = [lowEnd];
while(lowEnd < highEnd){
   arr.push(lowEnd + placeValueAdder);
   console.log("arr", arr)
   console.log("num1", num1)
   console.log("num2", num2)
   lowEnd += placeValueAdder
   
}
    
return arr

}


export let priceDropHandler = (num1, num2) => [...rangeBuilder(num1, num2)] 

export let bedTest = (value) => {
    return console.log(value.target.value 	)
}

