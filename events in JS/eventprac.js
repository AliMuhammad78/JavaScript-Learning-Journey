//  create a toggle button that changes the screeen to dark mode when clicked and light mode when clicked again 

let modebtn = document.querySelector("#mode") ;
let body = document.querySelector("body") ;
let curMode = "light" ;
modebtn.addEventListener("click"  , ()=> {
 if (curMode === "light"){
    curMode = "dark ";
     body.classList.add("dark") ;
body.classList.remove("light");

 }else {
    curMode = "light" ;
   body.classList.add("light");
 }
 console.log(curMode) ;

});