/*anonymous function*/
/*problem 1 */
/*
let arr1=[2,3,4,5,6,7];
let  odd=function (arr){
    return arr.filter(e=>{
        return  (e%2===1)?true:false;
    })
}
console.log(odd(arr1));*/

/*problem 2 */
/*let arr = ["jon","John","Jacob","Justin"];

let sortedArray = function(arr){
    
    return arr.map(e=>{
        return e.toUpperCase();
    })
};

console.log(sortedArray(arr))*/

/* problem 3
let arr=[1,2,3,4,5];
let sum= function(arr) {
    let s=0;
    return arr.reduce((s,e)=>s+e);
};

console.log(sum(arr));*/

/* problem 4
let arr=[21,22,23,24,25,26,27,28,29]
let primenum = function(arr){
    return arr.filter(e=>isPrime(e))
}
console.log(primenum(arr))

function isPrime(n){
    let flag=0;
    for(i=2;i<=Math.sqrt(n);i++){
       if(n%i===0){
          flag=1;
          break;
       } 
    }   
    if(flag){
        return false;
    }
    else{
        return true;
    }
}
*/

/*problem 5
let checkpalin = function(arr){
    
    return arr.filter(word=>{
        let flag=0;
        for(let i=0;i<word.length/2;i++){
            if(word[i]!==word[word.length-1-i]){
                flag=1;
                break;
                
            }
        }
        if(flag){
            return false;
        }
        else{
            return true;
        }
    })
}

console.log(checkpalin(arr)) */

/*Problem 6 */
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let median2=function(arr1,arr2){
    arr1 = arr1.concat(arr2);
    arr1.sort(function(a,b){
    return a-b;
    });
    
    //ans = (arr1.length%2===0)?arr1[arr1.length/2]:[arr1[arr1.length/2],arr1[(arr1.length/2)+1]]
    let ans = (arr1.length%2===1)?arr1[arr1.length/2]:((arr1[parseInt(arr1.length/2)+1]+arr1[parseInt(arr1.length/2)])/2);
    
    return ans;
}
console.log(median2(arr1,arr2));



/*problem 7
let arr = [1,2,3,3,4,5,5,5];
let checkdups = function(arr){
    let arrobj = {}
    for(let i=0;i<arr.length;i++){
        if(arrobj[arr[i]]===undefined){
            arrobj[arr[i]]=1;
        }
    }
    return Object.keys(arrobj);
}
console.log(...checkdups(arr)) */

/*problem 8*/
/*let arr = [1,2,3,4,5];

let rotateArr = function(arr,k){
    k = k%arr.length
    return arr.slice(k).concat(arr.slice(0,k))
}

console.log(rotateArr(arr,19)); */



/************************************below are iife solutions****************************************** */

/*IIFE function*/

/*problem 1 */
/*
let arr1=[2,3,4,5,6,7];
let  odd=(function (arr){
   let resArray=[],iter;
   for(iter=0;iter<arr.length;iter++){
       if(arr[iter]%2===1){
        //console.log(arr[iter]);
        
           resArray=resArray.concat(arr[iter]);
       }
   }
   
   return resArray;
    
})(arr1);

console.log(odd);*/

/*problem 2 */
/*let arr = ["jon","John","Jacob","Justin"];
console.log((function(arr){
    return arr.map(e=>{
        return e.toUpperCase();
    });
    
})(arr));*/

/* problem 3
let arr=[1,2,3,4,5];


console.log((function(arr){
    
    let s=0;
    return arr.reduce((s,e)=>s+e);
    
})(arr));*/

/*problem 4
let arr=[31,32,33,34,35,36,37,38,39];

console.log((function(arr){
    return arr.filter(e=>isPrime(e))
    
})(arr))

function isPrime(n){
    let flag=0;
    for(i=2;i<=Math.sqrt(n);i++){
       if(n%i===0){
          flag=1;
          break;
       } 
    }   
    if(flag){
        return false;
    }
    else{
        return true;
    }
}   */

/*problem 5
    console.log((function(arr){
     
     return arr.filter(word=>{
        let flag=0;
        for(let i=0;i<word.length/2;i++){
            if(word[i]!==word[word.length-1-i]){
                flag=1;
                break;
                
            }
        }
        if(flag){
            return false;
        }
        else{
            return true;
        }
    })
    
})(arr)) */

/*problem 6 */
console.log((function(arr1,arr2){
    arr1 = arr1.concat(arr2);
    arr1.sort(function(a,b){
    return a-b;
    });
    
    //ans = (arr1.length%2===0)?arr1[arr1.length/2]:[arr1[arr1.length/2],arr1[(arr1.length/2)+1]]
    let ans = (arr1.length%2===1)?arr1[arr1.length/2]:((arr1[parseInt(arr1.length/2)+1]+arr1[parseInt(arr1.length/2)])/2);
    
    return ans;
    
})(arr1,arr2))


/*problem 7
console.log(...(function(arr){
    
    let arrobj = {}
    for(let i=0;i<arr.length;i++){
        if(arrobj[arr[i]]===undefined){
            arrobj[arr[i]]=1;
        }
    }
    return Object.keys(arrobj);
    
})(arr))*/


/*problem 8 */
/*  let arr = [1,2,3,4,5];
    console.log((function (arr,k){
    
    k = k%arr.length;
    return arr.slice(k).concat(arr.slice(0,k))
    
})(arr,12));*/





