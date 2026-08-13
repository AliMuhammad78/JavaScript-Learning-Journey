let divv = document.querySelector("div") ;
console.log(divv) ;
 let ff = divv.getAttribute("id") ;
 console.log(ff) ;


 let pp = document.querySelector("p") ;
  
 console.log(pp.getAttribute("class")); 
 pp.setAttribute("class" , "jara") ;   // new name jara is setted for above class atrribute
 console.log(pp.getAttribute("class")); // now this give jara 

 divv.style.backgroundColor="red" ;
 divv.style.fontSize="20px" ; 
//  divv.style.visibility="hidden" ;  element ghaid ho jaye ga .


let newbutt = document.createElement("button") ;

console.log(newbutt) ;
newbutt.innerText = "click this button " ;

divv.prepend(newbutt) ;
divv.before(newbutt) ;
divv.after(newbutt) ;
  

pp.append(newbutt) ;

let newheading = document.createElement("h1") ;
newheading.innerHTML = "<i>his is the main heading of  the page</i>";

 document.querySelector("body").prepend(newheading) ;
// divv.remove() ;  // this will remove the whole div


