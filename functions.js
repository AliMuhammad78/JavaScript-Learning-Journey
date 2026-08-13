//  function myfun (){
//     console.log( " Tum mery pas hoty ho goya ") ;
//     console.log("jab koi dosra nahi hota ") ;  
//  }
//  myfun();

//  function sum(x ,y){
//   s = x +y ;
// //    x and y are local variables here ; 
//    return s ; 
// //    ruturn is a keyword , after return statement  code will not run e.g. 
// // console.log(students.splice(1 , 0 , "jamal" , "kamal" ,"haider ")) ;  
// // this line will not be executed ; 
//  } 
 
//  let val = sum (393, 9338) ; 
//  console.log(val);


// function sum (a , b ){
//     return a +  b  ; 
// }

//  arrow version 
// const arrowsum = (a,  b )=> {
//      console.log(a+b) ;   // now arrow sum which is actually  a variable name will behave 
//                         //    like a funtion 
// }

// arrowsum(33, 939 ) ; 

// function mul (a, b ){
//    return  a*b; 
// }

// // arrow version of above mul funtionx 
// const arrowMul = (a, b )=> {
//     console.log(a*b) ; 
// return;
// }

// arrowMul(3,9);



// Question

function vowel_returning (s){
    let count = 0 ; 
    for(let char of s ) {
        // console.log(char); 
        if (char === "a" || char ==="e " || char === "i" ||char ==="o" || char === "u")
        {
            // console.log(char) ;
            count++  ; 
            
        }
    }
    console.log(count); 
    return count ; 
}

vowel_returning("My name is ali ");



//    