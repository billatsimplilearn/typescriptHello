class Personage {
    name : String ;
    phone ?: String ;

    constructor(val : String) {
        this.name = val ;
    }
}

let bob : Personage = { "name" : "Bob" } ;
let anna : Personage = new Personage("Anna");

let size : number = 42 ;

anna.phone = "867-5309" ;
bob.phone = "1 800 528 1234" ;

console.log(`Person ${anna.name} has a phone number of ${anna.phone}`) ;
console.log(`Person ${bob.name} has a phone number of ${bob.phone}`) ;
