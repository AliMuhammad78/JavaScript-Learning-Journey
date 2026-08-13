// FOR EACH method 
 
// let arr = [1,2,3, 4, 5 ];
// arr. forEach(function printval (val){
//     console.log(val); 
// })

let arr = [ "Gujrat " , "Rawalpindi " , "kharian" , "Jehlem"];
arr. forEach((val , sim , arr )=> {                   //sim: The index of the current element (you named it sim, 
                                                    //             but    usually it's called index)
    console.log(val.toUpperCase() , sim , arr ); 
})






//    Practice question to find the square of an array 



//  let arr1 = [  14 , 52 , 77 , 11, 93 ] ;
// arr1.forEach(element  => {
//     element= element* element ; 
//     console.log(element);
    
// });

// other way to do above question

// let calsquare = (num)=> {
//     console.log(num * num ); 
// }

// arr1.forEach(calsquare) ;






//                  MAP METHOD 
// similar to array 
// its return values are used to form new array while in foreach new array is not formed 

//  let arr1 = [  143 , 52 , 99 , ,83 , 93 , 90 , 11, 93 ] ;

//   let newarr = arr1.map((val) =>{  // newarr is a new variable to store return values of map method 
//     console.log(val);
//     return val* val; 
//  })

//  console.log(newarr) ;

//  aee3 = arr1.filter( (val) => {
//     return val%2 === 0 ;
//  })
//  console.log(aee3);

//  arr4  = arr1.reduce((prev , curr ) => {
//     return prev > curr ? prev : curr;
//  })

//  console.log(arr4) ;

//  let marks = [ 143 , 52 , 99 , ,83 , 93 , 90 , 11, 93 ] ;
// let topers   =  marks.filter((val)=>{
//     return val>90 ;
//  })

//  console.log(topers) ;



// question to ask user enter a number , then print all numbers 1 to n 

let n  = prompt ("Enter the number") ;

let ary = [] ;
for (let i = 1 ; i <=n ; i++){
    ary[i-1] =i ;  
}
console.log (ary);

let sum = ary.reduce((res , curr )=>{
    return res + curr; 
})
console.log(sum) ;

let  factorial = ary.reduce((res , curr )=>{
    return res * curr; 
})
console.log(factorial) ; 