// function getdata(dataId){
//     console.log ("data" , dataId)
// }

// function getdata(dataId) {
//     setTimeout( ()=>{
//         console.log("data" , dataId)
//     } , 2000);
// }





//                  promises 

// let orderPhone = new Promise((resolve, reject) => {
//     let phoneInStock = true;  

//     setTimeout(() => {  
//         if (phoneInStock) {
//             resolve("Phone delivered! 📱");
//         } else {
//             reject("Out of stock! ❌");
//         }
//     }, 3000);  // Simulating delay of 3 seconds
// });

// orderPhone.then((message) => {
//     console.log(message);  // If promise is fulfilled , message is a variable for resolve function message
// }).catch((error) => {
//     console.log(error);  // If promise is rejected , error message to show reject funtion's message
// });



// let promise = new Promise((resolve , reject)=>{
//     console.log("this is a promise");    
//     // resolve("Your promise is resolved ") ;
//     reject("sorry for not fulfilling your promise") ;
// });

// const getpromise = ()=>{
//     return new Promise ((resolve, reject)=>{
//         console.log("this is a promise");
//         // resolve("success");
//         reject("error");

//     });
// };

// let pr = getpromise();
// pr.then((res)=>{
//     console.log("promise fulfilled" , res);
// });

// //  to catch the error 

//  pr.catch((err)=>{
    
//     console.log("rejected " , err); 
// })






// function asyncFunc1(){
//     return new Promise((resolve, reject )=>{
// setTimeout(()=>{

//     console.log(" data1");
//     resolve("success") ;
// },4000)
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject )=>{
// setTimeout(()=>{

//     console.log(" data2");
//     resolve("success") ;
// },4000)
//     });
// }
// console.log("fetching data...") ;
// let p1 = asyncFunc1();
// p1.then (                                // you can also write asynchFunc1().then ((res) =>{    })
//     (res)=>{
//         console.log(res);
//         let p2 = asyncFunc2();
// p2.then (
//     (res)=>{
//         console.log(res)


// })
// console.log("fetching data...") ;

// })





function getdata(dataId  ){
    return new Promise((resolve , reject )=>{
        setTimeout (()=>{
            console.log ("data" , dataId ) ;
            resolve("success") ;
        } , 3000)
    });
}

// async function getAlldata() {
//     console.log ("getting data1 ........")
//     await getdata(1) ;      // call will never ever go to the next statement unless  promis from this funtion is settled 
//     console.log ("getting data2........")

//     await getdata(2) ;
//     console.log ("getting data3 ........")

//     await getdata(3) ;
//     console.log ("getting data4 ........")

//     await getdata(4) ;
    
// }


// iife funtion ()(); 
// above code can be execute in this way , it will be called immediately
// lekin iss ko reuse nhi kr skty

(async function () {
    console.log ("getting data1 ........")
    await getdata(1) ;      // call will never ever go to the next statement unless  promis from this funtion is settled 
    console.log ("getting data2........")

    await getdata(2) ;
    console.log ("getting data3 ........")

    await getdata(3) ;
    console.log ("getting data4 ........")

    await getdata(4) ;
    
})();






// let p1= getdata(1);

// p1.then((res)=>{
//     console.log(res);
// })

// or

//  getdata(1).then((res)=>{
//     console.log(res);
//     getdata(2).then((res)=>{
//         console.log(res);
//         getdata(3).then((res)=>{
//             console.log(res);
//             getdata(4).then((res)=>{
//                 console.log(res);
//                 getdata(5).then((res)=>{
//                     console.log(res);
//                 })
//             })
//         })
//     })
    

// })


//  above code by promise chaining 
// getdata(1)
// .then((res)=>{
//     return getdata(2);
// })
// .then ((res)=>{
//    return getdata(3) ;
// }) 
// .then((res)=>{
//     console.log( res);
// });


// async function hello(){
//     console.log("hello how are you ?")
// }



// function api (){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(() => {
//             console.log ("weather data") ;
//         resolve (200) ;
//         }, 2000);
//      });
// }

// async function getweatherData() {
//     await api();
    
//}

