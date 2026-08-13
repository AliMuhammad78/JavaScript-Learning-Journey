// learning arrays in java script 
// let marks = [ 23, 93 , 38, 29, 75, 32];
// console.log(marks);
// // you can also see the length of array , length is not method , it is property .
// console.log(marks.length);

// typeof array is object
// you can change the valuis in array , but can not in strings 
// marks[0] = 77 ; 
// for ( let i  = 0 ; i<marks.length ; i++ ){
//     console.log(marks[i]);
// }
 
// using for-of loop 
// for(let arr of marks){
//     console.log(arr) ;
// }
// let sum =0;
// for( let val in marks ){
//   sum  = sum + val ;  
// }
// let avr = sum / marks.length; 
// // console.log(sum) ;
// console.log(avr); 



// practice Question 
// let arr = [250, 645, 300, 900, 50];

// for ( let temp of arr ){
   
//    let offer = temp/10 ; 
//    temp = temp - offer ; 
//    console.log(temp);
// }

// arr.pop();  // it will delete from end from original array  ; 
//  console.log(arr.toString()); 
// // console.log(arr);

// let students = ["ali " , "saagar" , "Muhammad " , "hamza ali " , "tayyab "];
// let feculty = ["Najeeb " , "Abd ur rehman " , "zahid iqbal "];

// let members = students.concat(feculty); 
// console.log("all members of the cricket team are " , members);
// students.unshift("jinnah"); 
// students.shift();
// // console.log(students.slice(3 , 4 ) ) ; 
// console.log(students.slice(3   ) ) ;
// console.log(students.splice(1 , 0 , "jamal" , "kamal" ,"haider ")) ;
// console.log(students.splice(1 , 3 , "jamal" , "kamal" ,"haider ")) ;


//              PRACTICE QUESTION 2 ;
 
let comp_names = [ "Bloomberg", "Microsoft" , "Uber ", "Google " , " IBM " , "Netflix"]; 
console.log(comp_names.shift());
comp_names.splice(2, 1, "Ola") ; 
console.log(comp_names);
console.log(comp_names.push("Amazon ")); 