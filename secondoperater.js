// let a = 5;
// b = 6 ;
// console.log( " This is the answer of multiplication of above two numbers  "  , a*b );
// console.log(" this is the answer of a power b ", a**b) ;

// a++  ; //6
// console.log (a );
// a-- ;  //5
//  b-- ; //5
//  b-- ; //4
//  b-- ; //3
//  b-- ; //2
//  console.log(b); // 2

//  console.log( a** b ) ;  // 5 power 2
//  console.log( a++ ) ; // print 5 and increase the value
//  console.log(a); // a=6
//  a-- ;  //a=5
//  a+= 4 ;  // a=a+4 ;
//  console.log(a);
//  a-=4;  // a= a-4;
//  console.log(a) ; // value of a is 5

//  a*=2;
//  console.log(a) ; // should be 10
//  a/=2 ;
//  console.log(a) ; // 5
//  a%=2 ;
//  console.log(a); // should be 1
// a+=4 ;

//  a**2; // should be 25
//  console.log(a);

//  comparison operators
let a = 6;
let b = 6;

console.log("is a equals b ", a == b);
b = "8";
console.log(b);

console.log("is a equals b ?", a == b);
b = 6;

console.log("is a equals b ? ", a === b);

console.log(a);
console.log(b);
console.log("is a equals b ", a !== b);

console.log("is a equals b ", a === b);

// logical operators

let x = 6;
let y = 2;
let cond1 = x > y;
let cond2 = x === 6;
console.log(cond1 && cond2); //true
console.log(cond1 || cond2); // true because aik b true to true , yahan to phir dono true ha
cond3 = y === 3;
console.log(cond1 || cond3); // true because one is true
cond4 = x < y;
console.log(cond3 || cond4); // false

// you can directly use variables instead of using cond variable
console.log(x > a || y > b); // false because both false ;
console.log(" x is not greater than a ", !(x > a)); // use of not operator
