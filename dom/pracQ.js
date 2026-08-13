let h2 = document.querySelector("h2") ;
console.dir(h2.innerText) ;

h2.innerText =   h2.innerText + " from Apna College students " ; 
//  concatinating two strings 


let divs = document.querySelectorAll(".box");
console.dir(divs) ; 

// divs[0].innerText = "1st unique value " ; 
// divs[1].innerText = "2nd unique value " ; 
// divs[2].innerText = "3rd unique value " ; 



//  you can use loops instead of writing these things individually ;

let indx = 1 ; 
for (div of divs ){
    div.innerText = `new unique value ${indx}`; 
    indx++ ; 
}