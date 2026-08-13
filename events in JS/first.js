let btnn = document.querySelector("#btn1");
// btnn.onclick=(evt)=>{
//     // e is the event's object,  it has all info about the details of event 
//     // funtion to handle event of clicking one time
//     console.log(evt); 
//     console.log(evt.type ) ;
//     console.log(evt.target , evt.clientX , evt.clientY ) ;
//     console.log("button 1 was clicked ") ;
//     // let a =25 ; 
//     // a++ ; 
//     // console.log(a) ;
    
// }

// let divv = document.querySelector("div") ;
// divv.onmouseover =()=>{

//     console.log("this box is empty") ;
// }



btnn.addEventListener("click" ,(eve)=> {
  
  console.log(eve) ;
    console.log("button 1 was clicked -handler 1 ") ;
})

btnn.addEventListener("click" ,()=> {
    console.log("button 1 was clicked-handler 2  ") ;
})

handler3  = ()=> {
    console.log("button 1 was clicked-handler 3  ") ;
}
btnn.addEventListener("click" , handler3) ;

//  we made variable handler3 becuase we want to delete this event handler later on 



btnn.addEventListener("click" ,()=> {
    console.log("button 1 was clicked-handler 4 ") ;
})

btnn.removeEventListener( "click" , handler3 );