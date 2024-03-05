// anonymous function and IIEE

//1) Print odd numbers in an array

let printOdd = function(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2 != 0){
            console.log(arr[i])
        }
    }
};

(function(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2 != 0){
            console.log(arr[i])
        }
    }
})([1,2,3,4,5,6,7,8,9]);

printOdd([1,2,3,4,5,6,7,8,9]);

//2) Convert all the strings to title caps in a string array

let titleCaps = function(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }
    console.log(arr);
}

titleCaps(["this", "is", "a", "sample", "string", "array"]);

(function(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }
    console.log(arr);
})(["this", "is", "a", "sample", "string", "array"]);

//3) sum of all numbers in an array

let calculate = function(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i];
    }
    console.log(result.toString());
}

calculate([1, 2, 3, 4, 5, 6, 7, 8, 9]);

(function(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i];
    }
    console.log(result.toString());
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//4) remove all prime numbers from an array

let removeprimes = function(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (!isPrime) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}

removeprimes([1,2,3,4,5,6,7,8,9,10]);

(function(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (!isPrime) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
})([1,2,3,4,5,6,7,8,9,10])

//5) return all palindromes in an array 

let Pallarr = function(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let s = String(arr[i]).split('').reverse().join('');
        if (s === String(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}

Pallarr([121,222,"abc","cba","deed",345]);

//6) Return median of two sorted arrays of the same size.

(function(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let s = String(arr[i]).split('').reverse().join('');
        if (s === String(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result); 
})([121,222,"abc","cba","deed",345])

let medianArray = function(arr1,arr2){
    const merged = [...arr1, ...arr2].sort();
    const medianIndex = Math.floor((merged.length - 1) / 2);

    if (merged.length % 2 === 0) {
        console.log( [merged[medianIndex], merged[medianIndex + 1]]);
    } else {
        console.log( [merged[medianIndex]]);
    }
}

medianArray(["abc", "def", "ghi"],["ijk","lmn","opq","aaa"]);

(function(arr1,arr2){
    const merged = [...arr1, ...arr2].sort();
    const medianIndex = Math.floor((merged.length - 1) / 2);

    if (merged.length % 2 === 0) {
        console.log( [merged[medianIndex], merged[medianIndex + 1]]);
    } else {
        console.log( [merged[medianIndex]]);
    }
})(["abc", "def", "ghi"],["ijk","lmn","opq","aaa"])

// 7) Remove duplicates in an array

let removeDuplicates = function(arr){
    let result = []
    for(let i=0; i<arr.length;i++){
        if (!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    console.log(result)
}

removeDuplicates([1,1,2,2,3,3,4,4,5,6,7]);
(function(arr){
    let result = []
    for(let i=0; i<arr.length;i++){
        if (!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    console.log(result)
}([1,1,2,2,3,3,4,4,5,6,7]))

//8 roate array k times 

let RotateArr = function(arr,k){
   
    k = k % arr.length;

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    
    console.log(arr);
}

RotateArr([1,2,3,4,5],2);

(function(arr,k){

    k = k % arr.length;

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    
    console.log(arr);

}([1,2,3,4,5],2))


// Arrow functions

// 1) Print odd numbers in array
const oddnumbers = arr => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0)
            console.log(arr[i]);
    }
}

oddnumbers([1,2,3,4,5,6,7,8,9,])

//2) Convert all the strings to title caps in a string array
const StringCaps = arr =>{
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }
    console.log(arr);
}

StringCaps(["this", "is", "a", "sample", "string", "array"])


//3) Sum of all elements of array
const sum = arr =>{
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result = result + arr[i];
    }
    console.log(result.toString());
}

sum([1,2,3,4,5,6,7,8,9])

// 4) All Prime Nums in an array

const primeNumsArray = arr =>{
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        if (arr[i] <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (!isPrime) {
            result.push(arr[i]);
        }
    }
    console.log(result);
    return result;
}

primeNumsArray([1,2,3,4,5,6,7,8,9])

// 5) Return all the palindromes in an array

const pallindromeArr = arr =>{
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let s = String(arr[i]).split('').reverse().join('');
        if (s === String(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log(result);
}