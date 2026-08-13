const URL = " https://api.agify.io?name=meelad" ;

// https://cat-fact.herokuapp.com

// let promise = fetch(URL);
// console.log(promise) ;


const factPara = document.querySelector("#fact") ;
const btn = document.querySelector("#btn") ;


//  api call using async await 
const getFacts = async () => {
    console.log ("getting data .......") ;
    let  response  = await fetch(URL) ;         // response is a object here 
    console.log(response) ;
    let data = await response.json();

// console.log (data[0].text) ;
factPara.innerText = data[0].status ;
};

btn.addEventListener("click" , getFacts) ;
