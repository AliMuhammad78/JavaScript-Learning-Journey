 
// //  for (let count =1 ; count<=5 ; count++ ){
// //     console.log("I am not studying at university of gujrat ") ;
// //  } 

// //  let sum = 0 ; 
// //  let n = 8 ; 
// //  for ( let  i = 1; i<=n; i++){
// //     sum = sum + i ; 
// //     console.log(i);  // you can also print i 
// //  }
// //   console.log(sum);
// //   console.log(i);   // you can not print i here 
// //   if you have written var above with i , then you can print i ;


// // you should not use infinite loop on system . browser will stop . Even laptop is stopped 


// For off loop 
// let str = "university of gujrat " ; 
// for ( let i of str ) {
//     console.log("i=" , i);
// }

// // let size = 0 ; 
// // for ( let i of str){
// //     console.log(i) ;
// //     size = size + 1 ; 
// // }
// // console.log(" size of str variable =",size);



// // for-in loop 
// // return the keys , in below example , keys are st_name , st_rollno , st_gpa

let student = {
    st_name : "ali saagar " , 
    st_rollno : 95 , 
    st_gpa : 3.49 ,
};

for ( let i in student){
     console.log( i , student[i]) ;
}
// for ( let key in student){
// console.log("key=" , key, "value=", student[key]) ;
    
// }
 
// // for ( let num = 0; num <= 100 ; num++ ){
// //     if (num %2!= 0 ){
// //     console.log(num) ;
// //     }
// // }

// // let numm =98 ; 
// // let msg  = prompt("Enter the number to guess"); 
// // while(msg!=numm ) {
         
 
// //     msg = prompt("You number is not correct . Try again.");

 
// // }

// // msg = prompt("you entered correct number ");


// let str2 = "Muhammad"; 
// // console.log(str2.length);
// // console.log(str2[3]); 

// let car ={
//     item: "car",
//     price : 93 , 
// }

// let out = `the cost of ${ car.item} is ${car.price} rupees ` ;
// console.log(out);
// let str3 = str2.toUpperCase() ;
// console.log(str2);
// console.log(str3);

// // or 
// let str4 = "       My name is Ali . I am learning javascript.        " ; 
// let str5 = str4.toUpperCase();
// console.log(str5) ;
// str5 = str5.trim();
// console.log(str5);
// console.log(str5.slice(3,8 ));
// console.log(str5.slice(8)) ;
// console.log(str5.concat(" This is  boring to some extent. "));

// let str6 = "hello " ;
// console.log(str6.replaceAll("l" ,"y")); // replace all l with y . simple replace will replace only first l 
let  fullname= prompt("Enter your full name without spaces");
 let finalname = "@" + fullname ; 
 console.log (finalname.concat( fullname.length)) ;
