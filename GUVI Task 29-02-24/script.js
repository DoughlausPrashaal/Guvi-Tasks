// Compare two JSON Without Order 


let obj1 = {name : "Person 1", age : 5}
let obj2 = {age :5 , name : "Person 1"}

obj1 = Object.keys(obj1).sort()
obj2 = Object.keys(obj2).sort()

let str1 = JSON.stringify(obj1)
let str2 = JSON.stringify(obj2)

console.log(str1 === str2)

// API 

let xhr = new XMLHttpRequest();
// console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
//    console.log(data[0])
  for(let i =0; i <=data.length; i++){
    console.log(data[i].flags.png) //Displaying url of the flags
    console.log(data[i].name.common)  //Displaying common name 
    console.log(data[i].region) //Displaying region
    console.log(data[i].subregion) // Displaying sub region
  }

};




