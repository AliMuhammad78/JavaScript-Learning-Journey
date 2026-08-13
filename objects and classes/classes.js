const student = {
    fulName : "Muhammad Ali" ,
    marks : 70 , 
    printmarks: function (){
        console.log("marks" , this.marks )
    },
};


const employee = {
    calTax (){
        console.log("tax rate is 20%") ;
    }
}

const Aliemp= {
    eName : "Ali " ,
    salary : 49484 ,
}

Aliemp.__proto__ = employee ; 

class Car {
        // constructor(){
        //     console.log("why are you creating objects ")
        // }
    constructor(brand , miles){
        this.brandName= brand; 
        this.safar = miles; 
        console.log("why are you creating objects ")
    }
    start(){
   console.log("start the car ") ; 
    }
    stop(){
   console.log(" stop the car ") ;

    }
//     setbrand(brand){
// this.brandName = brand  ;    // this means the object for which we are using it .
//     }

}


let myCar = new Car ();

let fortuner = new Car("forturner 2.0" , 9228) ;
console.log(fortuner) ;
// fortuner.setbrand("fortuner 2.0") ;



class Parent {
hello(){
    console.log (" this is the main class ")
}
}

class child extends Parent {
}

let obj1 = new child ();



class Person {
    constructor(){
        this.specie= "homo sapian" ;
    }

    eat (){
console.log("you can eat now") ;
    }
    
}

class engineer extends Person {

    
    constructor(branch){
        super() ;             // should be written to get properties of parent 
        this.branch = branch
    }
    work(){
        super.eat();
        
    }
}

let engobj = new engineer ("mechanical engineer ") ;







